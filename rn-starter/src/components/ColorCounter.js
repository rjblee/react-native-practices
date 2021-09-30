import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = (props) => {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button title={`Increase ${props.color}`}></Button>
      <Button title={`Decrease ${props.color}`}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
