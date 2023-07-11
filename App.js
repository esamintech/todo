import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import AddTodo from "./components/addTodo";
import Header from "./components/header";
import History from "./components/history";
import TodoItem from "./components/todoitem";

export default function App() {
  const [todos, setTodos] = useState([{ text: "Go to the Gym", key: "1" }]);

  const [showHistory, setShowHistory] = useState(false);

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      styles.titleText;

      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header setShowHistory={setShowHistory} />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {/* FlatList */}
            {showHistory ? (
              <History todos={todos} />
            ) : (
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    item={item}
                    pressHandler={pressHandler}
                    isHistory={false}
                  />
                )}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
    flex: 1,
  },

  list: {
    marginTop: 20,
    marginBottom: -50, // hack for bottom border of last element in flatlist not showing
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
});
