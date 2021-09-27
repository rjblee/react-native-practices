import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ImageDetail = (props) => {
  return <Text style={styles.title}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default ImageDetail;
