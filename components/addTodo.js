import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo(submitHandler) {
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
      {/* add button here */}
      <Button
        color="coral"
        title={"Add"}
        onPress={() =>
          // add the text to the todoitem
          submitHandler.submitHandler(text)
        }
      ></Button>
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
    fontSize: 24,
    color: "#333",
    backgroundColor: "#fff",
  },
});
