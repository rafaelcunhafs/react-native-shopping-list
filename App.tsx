import { StyleSheet, View } from "react-native";
import ShoppingList from "./components/ShoppingList";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.app}>
      <ShoppingList />
    </View>
  );
}
