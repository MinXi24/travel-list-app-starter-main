import React, { useState } from "react";
export default function Form({ handleAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };
      handleAddItems(newItem);
      setDescription("");
      setQuantity(1);
    }
  
    function handleInputChange(e) {
      setDescription(e.target.value);
    }
  
    function handleSelectChange(e) {
      setQuantity(Number(e.target.value));
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select name="number" id="quantity" value={quantity} onChange={handleSelectChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input
          type="text"
          placeholder="Item..."
          name="description"
          id="description"
          value={description}
          onChange={handleInputChange}
        />
        <button>Add</button>
      </form>
    );
  }