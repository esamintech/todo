import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item, pressHandler, isHistory }) {
  const [isDone, setIsDone] = useState(false);

  const handlePress = () => {
    setIsDone(!isDone);
    if (!pressHandler) return;
    pressHandler(item.key);
  };
  if (isHistory || isDone) {
    return (
      <TouchableOpacity onPress={handlePress}>
        <LinearGradient
          colors={["#3A1B68", "#D15163"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.item}
        >
          <Text style={styles.itemText}>{item.text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={handlePress} disabled={isDone}>
      <LinearGradient
        colors={["#3A1B68", "#D15163"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.item}
      >
        <View style={[styles.item, isDone && styles.doneItem]}>
          <Text style={[styles.itemText, isDone && styles.doneText]}>
            {item.text}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
  },
  itemText: {
    fontSize: 16,
    color: "#fff", // Added color to ensure visibility in gradients
  },

  doneItem: {
    backgroundColor: "transparent",
  },

  doneText: {
    textDecorationLine: "line-through",
  },
});
