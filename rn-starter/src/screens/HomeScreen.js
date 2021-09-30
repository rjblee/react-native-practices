import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen here</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => props.navigation.navigate("Color")}
      />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
