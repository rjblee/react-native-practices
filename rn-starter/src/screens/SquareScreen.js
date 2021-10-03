import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const color_increment = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +10, -10

    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", color_increment)}
        onDecrease={() => setColor("red", -1 * color_increment)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + color_increment)}
        onDecrease={() => setGreen(green - color_increment)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + color_increment)}
        onDecrease={() => setBlue(blue - color_increment)}
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
