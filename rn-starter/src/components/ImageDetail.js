import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.title}>Image score: {props.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default ImageDetail;
