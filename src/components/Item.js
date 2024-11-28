import React from "react";
export default function Item({ item, handleDeleteItem, handleUpdateItem }) {
    const itemStyle = item.packed ? { textDecoration: "line-through" } : null;
  
    return (
      <li style={itemStyle}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleUpdateItem(item)}
        />
        {item.description} ({item.quantity})
        <button onClick={() => handleDeleteItem(item)}>X</button>
      </li>
    );
  }
  
  