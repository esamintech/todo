import { FlatList, StyleSheet, View } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Go to the Gym", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
    { text: "working on the project", key: "4" },
  ]);
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          {/* FlatList */}
          <FlatList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
