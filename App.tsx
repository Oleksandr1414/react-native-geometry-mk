import Form2D from "./components/Form2D";
import Form3D from "./components/Form3D";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form2D />
      <Form3D />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20px",
    backgroundColor: "#fff",
  },
});
