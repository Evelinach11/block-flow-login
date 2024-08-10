import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerMainScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#6E6E6E",
    textAlign: "left",
    marginBottom: 30,
  },
  button: {
    width: "100%",
    backgroundColor: "#30B0C7",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  transparentButton: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EBEBEC",
    marginBottom: 10,
  },
  transparentButtonText: {
    color: "#1C1E24",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
