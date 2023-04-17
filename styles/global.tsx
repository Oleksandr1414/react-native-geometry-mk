import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "min(80vw, 700px)",
    display: "flex",
    paddingTop: 30,
    paddingBottom: 30,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
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
    fontSize: 20,
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
    padding: 10,
    width: "90%",
    minHeight: 90,
    maxHeight: 260,
    overflowY: "scroll",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
});
