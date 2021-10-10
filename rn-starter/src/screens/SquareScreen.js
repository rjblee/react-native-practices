import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const color_increment = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +10, -10

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }

    //  if (color === "red") {
    //    if (red + change > 255 || red + change < 0) {
    //      return;
    //    } else {
    //      setRed(red + change);
    //    }
    //  }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", color_increment)}
        onDecrease={() => setColor("red", -1 * color_increment)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", color_increment)}
        onDecrease={() => setColor("green", -1 * color_increment)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", color_increment)}
        onDecrease={() => setColor("blue", -1 * color_increment)}
        color="Blue"
      />
      {/* <Button
        title="Reset color"
        onPress={() => {
          setRed(red == 0);
          console.log(red);
        }}
      ></Button> */}
      <View
        style={{
          height: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
