import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CounterWithState } from "./src/components/CounterWithState";
import { CounterWithRedux } from "./src/components/CounterWithRedux";
import { store } from "./src/reduxstore/Store";
import { Provider } from "react-redux";
import { CounterWithHooks } from "./src/components/CounterWithHooks";
import { Provider as CounterProvider } from "./src/context/CounterContext";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const [counterNumber, setCounterNumber] = useState("1");

  return (
    <View style={styles.container}>
      <Text>Enter the counter(Increase/Decrease) value below</Text>
      <TextInput
        selectionColor={"#59c3c3"}
        autoFocus={true}
        textAlign={"center"}
        placeholder="Counter"
        style={styles.counterInputText}
        onChangeText={(text) => {
          let num = parseInt(text);
          if (num) {
            setCounterNumber(num.toString());
          } else {
            setCounterNumber("");
          }
        }}
        defaultValue={counterNumber}
        value={counterNumber}
        keyboardType="number-pad"
      />

      <View style={styles.counterContainer}>
        <Text>
          Counter with <Text style={styles.counterText}>useState</Text>
        </Text>
        <CounterWithState counterNumber={parseInt(counterNumber)} />
      </View>

      <View style={styles.counterContainer}>
        <Text>
          Counter with <Text style={styles.counterText}>Redux</Text>
        </Text>
        <Provider store={store}>
          <CounterWithRedux counterNumber={parseInt(counterNumber)} />
        </Provider>
      </View>

      <View style={styles.counterContainer}>
        <Text>
          Counter with <Text style={styles.counterText}>Context</Text>
        </Text>
        <CounterProvider>
          <CounterWithHooks counterNumber={parseInt(counterNumber)} />
        </CounterProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb6c1",
    alignItems: "center",
    justifyContent: "center",
  },
  counterInputText: {
    paddingBottom: 10,
    fontSize: 30,
    backgroundColor: "#d7d8cc",
    width: "40%",
    alignItems: "center",
    borderBottomColor: "#59c3c3",
    borderBottomWidth: 2,
  },
  counterContainer: {
    backgroundColor: "#59c3c3",
    width: "90%",
    margin: 10,
    padding: 5,
    alignItems: "center",
  },
  counterText: {
    color: "#34568b",
    fontWeight: "bold",
  },
});
