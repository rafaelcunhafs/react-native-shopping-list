import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { ScrollView, StyleSheet, View } from "react-native";
import { styles } from "../styles";
import { ShoppingItem } from "../types/Item";
import ItemForm from "./ItemForm";

export type ListItemsProps = {
  items: ShoppingItem[];
  completeItem: (id: number | null) => void;
  removeItem: (id: number | null) => void;
  updateItem: (itemId: number | null, newValue: ShoppingItem) => void;
};

const ListItems: React.FC<ListItemsProps> = ({
  items,
  completeItem,
  removeItem,
  updateItem,
}) => {
  const [edit, setEdit] = useState<ShoppingItem>({
    id: null,
    text: "",
  });

  const submitUpdate = (value: ShoppingItem) => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      text: "",
    });
  };

  if (edit.id) {
    return <ItemForm edit={edit} onSubmit={submitUpdate} />;
  }

  const checkIndexIsEven = (n: number) => {
    return n % 2 == 0;
  };

  const iconMargin = StyleSheet.flatten([styles.icon, styles.iconMargin]);
  const icon = StyleSheet.flatten(styles.icon);

  return (
    <ScrollView>
      {items.map((item, index) => (
        <View
          style={[
            item.isComplete ? styles.itemRowComplete : styles.itemRow,
            checkIndexIsEven(index)
              ? styles.itemRowPrimaryColor
              : styles.itemRowSecondaryColor,
          ]}
          key={index}
        >
          <div key={item.id}>{item.text}</div>

          <View style={styles.icons}>
            {!item.isComplete && (
              <>
                <TiEdit
                  style={iconMargin}
                  onClick={() => setEdit({ id: item.id, text: item.text })}
                />

                <FaCartPlus
                  style={iconMargin}
                  onClick={() => completeItem(item.id)}
                />
              </>
            )}

            <RiCloseCircleLine
              style={icon}
              onClick={() => removeItem(item.id)}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ListItems;
