import React, { useState } from "react";
import { Text } from "react-native";
import { styles } from "../styles";
import { ShoppingItem } from "../types/Item";
import ItemForm from "./ItemForm";
import ListItems from "./ListItems";

const ShoppingList: React.FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  const addItem = (item: ShoppingItem) => {
    if (!item.text || /^\s*$/.test(item.text)) return;

    const newItems = [item, ...items];
    setItems(newItems);
  };

  const completeItem = (id: number | null) => {
    let updateItems = items.map((item) => {
      if (item.id === id) item.isComplete = !item.isComplete;

      return item;
    });

    setItems(updateItems);
  };

  const removeItem = (id: number | null) => {
    const removeArr = [...items].filter((item) => item.id !== id);
    setItems(removeArr);
  };

  const updateItem = (itemId: number | null, newValue: ShoppingItem) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <Text style={styles.title}>Lista de compras</Text>
      <ItemForm onSubmit={addItem} />
      <ListItems
        items={items}
        completeItem={completeItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </div>
  );
};

export default ShoppingList;
