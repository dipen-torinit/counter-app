import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CounterWithState } from "./src/components/CounterWithState";
import { CounterWithRedux } from "./src/components/CounterWithRedux";
import { store } from "./src/reduxstore/Store";
import { Provider } from "react-redux";
import { CounterWithHooks } from "./src/components/CounterWithHooks";
import { Provider as CounterProvider } from "./src/context/CounterContext";

export default function App() {
  const [counterNumber, setCounterNumber] = useState("1");

  return (
    <View style={styles.container}>
      <Text>Enter the counter value below</Text>
      <TextInput
        placeholder="Enter the counter value"
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

      <Text>Counter with use State</Text>
      <CounterWithState counterNumber={parseInt(counterNumber)} />

      <Text>Counter with redux</Text>
      <Provider store={store}>
        <CounterWithRedux counterNumber={parseInt(counterNumber)} />
      </Provider>

      <Text>Counter with Context</Text>
      <CounterProvider>
        <CounterWithHooks counterNumber={parseInt(counterNumber)} />
      </CounterProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  counterInputText: {
    paddingBottom: 20,
    fontSize: 20,
  },
});
