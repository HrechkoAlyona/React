import React, { useState, useEffect } from "react";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  //  Намеренная ошибка (частые перерисовки)
//   useEffect(() => {
//     console.log("Компонент ListItems обновлен");
//   }, [items]);

    // Исправленный вариант — вызывается только при монтировании
  useEffect(() => {
    console.log("Компонент ListItems смонтирован");
  }, []);


  return (
    <div style={{ padding: "20px" }}>
      <h2>Список элементов</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="Введите элемент"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;



