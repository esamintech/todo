import React from "react";
import { FlatList, Text, View } from "react-native";

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
