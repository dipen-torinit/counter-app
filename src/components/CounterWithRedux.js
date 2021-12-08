import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../reduxstore/Actions";

export function CounterWithRedux({ counterNumber }) {
  const data = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <Button
          title="+"
          onPress={() => {
            dispatch(counterActions.addition({ counterNumber }));
          }}
        />
        <Text> {data}</Text>
        <Button
          title="-"
          onPress={() => {
            dispatch(counterActions.substraction({ counterNumber }));
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
