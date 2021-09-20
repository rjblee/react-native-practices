import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 22 },
    { name: "Friend 3", age: 25 },
    { name: "Friend 4", age: 21 },
    { name: "Friend 5", age: 29 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.header}>
              {item.name} - Age {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
  },
});

export default ListScreen;
