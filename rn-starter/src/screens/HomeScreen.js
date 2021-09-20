import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen here</Text>
      <Button title="Components" />
      <TouchableOpacity>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
