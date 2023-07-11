import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <LinearGradient
        colors={["#3A1B68", "#D15163", "#D15163", "#3A1B68"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.addTodo}
      >
        <Button
          title="add todo"
          color="#fff"
          style={styles.addTodo}
          onPress={() => submitHandler(text)}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontSize: 20,
    color: "#333",
    backgroundColor: "#fff",
  },
  addTodo: {
    borderRadius: 10,
    padding: 1,
    margin: 10,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    shadowOffset: { width: -2, height: 2 },
  },
});
