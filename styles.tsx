import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //   container: {
  //     margin: 0,
  //     fontFamily:
  //       "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
  //     WebkitFontSmoothing: "antialiased",
  //     MozOsxFontSmoothing: "grayscale",
  //     code: {
  //       fontFamily:
  //         'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  //     },
  //   },
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    backgroundColor: "#161a2b",
    textAlign: "center",
    margin: "128px auto",
    paddingBottom: 32,
  },
  title: {
    margin: "32px 0",
    color: "#fff",
    fontSize: 24,
  },
  hidden: {
    display: "none",
  },
  itemForm: {
    marginBottom: 32,
  },
  inputText: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 32,
    paddingRight: 32,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#5d0cff",
    marginTop: 15,
    width: "100%",
    backgroundColor: "transparent",
    color: "#fff",
  },
  button: {
    padding: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 4,
    backgroundColor:
      "linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)",
    color: "#fff",
    textTransform: "capitalize",
  },
  inputTextEdit: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#149fff",
  },
  buttonEdit: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 22,
    paddingRight: 22,
    backgroundColor:
      "linear-gradient(90deg, rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%)",
  },
  itemRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "4px auto",
    color: "#fff",
    padding: 16,
    borderRadius: 5,
    width: "100%",
  },
  itemRowPrimaryColor: {
    backgroundColor:
      "linear-gradient(90deg,rgba(255, 118, 20, 1) 0%, rgba(255, 84, 17, 1) 100%)",
  },
  itemRowSecondaryColor: {
    backgroundColor:
      "linear-gradient(90deg,rgba(255, 12, 241, 1) 0%, rgba(250, 0, 135, 1) 100%)",
  },
  itemRowComplete: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "4px auto",
    color: "#fff",
    backgroundColor:
      "linear-gradient(90deg,rgba(255, 118, 20, 1) 0%, rgba(255, 84, 17, 1) 100%)",
    padding: 16,
    borderRadius: 5,
    width: "100%",
    textDecorationLine: "line-through",
    opacity: 0.4,
  },
  icons: {
    display: "flex",
    alignItems: "center",
    fontSize: 24,
  },
  iconMargin: {
    marginRight: 10,
  },
  icon: {
    opacity: 0.5,
  },
});
