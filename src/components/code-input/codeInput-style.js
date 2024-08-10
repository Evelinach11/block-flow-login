import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    fontSize: 24,
    color: "#30B0C7",
    fontWeight: "700",
    textAlign: "center",
    width: 45,
    height: 55,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#E1E1E2",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputActive: {
    borderColor: "#7C00FE",
  },
});

export default styles;
