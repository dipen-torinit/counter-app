import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function CounterWithState({ counterNumber }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <Button
          title="+"
          onPress={() => {
            setCounter(counter + counterNumber);
          }}
        />
        <Text> {counter}</Text>
        <Button
          title="-"
          onPress={() => {
            setCounter(counter - counterNumber);
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
