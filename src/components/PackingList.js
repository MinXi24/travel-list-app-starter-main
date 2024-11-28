import Item from "./Item";
export default function PackingList({ items, handleDeleteItem, handleUpdateItem, searchTerm }) {
    const filteredItems = items.filter(
      (item) => item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="list">
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Item
                key={item.id}
                item={item}
                handleUpdateItem={handleUpdateItem}
                handleDeleteItem={handleDeleteItem}
              />
            ))
          ) : (
            <p>No items match your search.</p>
          )}
        </ul>
      </div>
    );
  }