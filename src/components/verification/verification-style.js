import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  secondaryText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    color: "#707987",
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 25,
  },
  button: {
    width: "100%",
    backgroundColor: "#30B0C7",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    color: "#666",
    fontSize: 16,
  },
  link: {
    color: "#36DABC",
    fontSize: 16,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default styles;
