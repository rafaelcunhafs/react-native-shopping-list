import React, { useState, useEffect, useRef } from "react";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "../styles";
import { ShoppingItem } from "../types/Item";

export type ItemFormProps = {
  edit?: ShoppingItem;
  onSubmit: (value: ShoppingItem) => void;
};

const ItemForm: React.FC<ItemFormProps> = ({ edit, onSubmit }) => {
  const [input, setInput] = useState(edit ? edit.text : "");

  const inputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  const handleButtonSubmit = () => {
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    handleButtonSubmit();
  };

  return (
    <View style={styles.itemForm}>
      <form onSubmit={handleSubmit}>
        {edit ? (
          <>
            <TextInput
              style={[styles.inputText, styles.inputTextEdit]}
              placeholder="Errou na lista?"
              value={input}
              ref={inputRef}
              autoComplete="off"
              onChangeText={setInput}
            />
            <Pressable
              style={[styles.button, styles.buttonEdit]}
              onPress={handleButtonSubmit}
            >
              Editar
            </Pressable>
          </>
        ) : (
          <>
            <TextInput
              style={styles.inputText}
              placeholder="O que compraremos hoje?"
              value={input}
              ref={inputRef}
              autoComplete="off"
              onChangeText={setInput}
            />
            <Pressable style={styles.button} onPress={handleButtonSubmit}>
              Comprar
            </Pressable>
          </>
        )}
      </form>
    </View>
  );
};

export default ItemForm;
