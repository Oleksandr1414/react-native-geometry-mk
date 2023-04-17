import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "70vw",
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
    marginTop: 5,
    marginBottom: 5,
    fontWeight: "bold",
  },
  resultBox: {
    marginTop: 5,
    padding: 3,
    width: "75%",
    maxHeight: 250,
    overflow: "scroll",
  },
});
