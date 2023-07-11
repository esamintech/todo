import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoitem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Go to the Gym", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
    { text: "working on the project", key: "4" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          {/* FlatList */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
});
