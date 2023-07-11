import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function History({ todos }) {
  return (
    <View style={styles.historyContainer}>
      <Text style={styles.historyTitle}>History</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>{item.text}</Text>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  historyItem: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f8f8f8",
    fontSize: 20,
  },
});
