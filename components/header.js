import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  showHistory,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Header() {
  return (
    <View>
      <LinearGradient
        colors={["#3A1B68", "#D15163", "#F5BF84", "#BFDAC4"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Text style={styles.title}>My Todoes</Text>
        <TouchableOpacity onPress={() => setShowHistory(!showHistory)}>
          <MaterialIcons
            name={showHistory ? "history" : "history"}
            size={24}
            color="#521A49"
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  // ...
  header: {
    height: 80,
    paddingTop: 38,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#7DDBD5",
    paddingHorizontal: 16,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  historyContainer: {
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
