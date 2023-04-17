import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "95vw",
    display: "flex",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: 5,
  },
  selectedFigure: {
    textAlign: "center",
    fontSize: 25,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    width: "100%",
    marginTop: 20,
    fontWeight: "bold",
  },
});
