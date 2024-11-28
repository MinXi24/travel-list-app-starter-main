
export default function Stats({ items }) {
    return (
      <footer className="stats">
        <em>
          You have {items.length} items in the list. You already packed{" "}
          {items.filter((item) => item.packed).length} (
          {Math.round(
            (items.filter((item) => item.packed).length / items.length) * 100
          )}
          %).
          {Math.round(
            (items.filter((item) => item.packed).length / items.length) * 100
          ) === 100 && "You got everything!"}
        </em>
      </footer>
    );
  }