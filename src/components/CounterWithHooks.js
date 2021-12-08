import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Context as CounterContext } from "../context/CounterContext";

export function CounterWithHooks({ counterNumber }) {
  const { state, increaseCounter, decreaseCounter } =
    useContext(CounterContext);

  return (
    <>
      <View style={styles.container}>
        <Button
          title="+"
          onPress={() => {
            increaseCounter({ counterNumber });
          }}
        />
        <Text> {state.counter}</Text>
        <Button
          title="-"
          onPress={() => {
            decreaseCounter({ counterNumber });
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
