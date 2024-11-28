import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import SearchBar from "./Search";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];


function App() {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (item) => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
  };

  const handleUpdateItem = (item) => {
    setItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id ? { ...prevItem, packed: !prevItem.packed } : prevItem
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <SearchBar onSearch={setSearchTerm} />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        searchTerm={searchTerm}
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
