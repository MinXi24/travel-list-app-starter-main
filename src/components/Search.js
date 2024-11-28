export default function SearchBar({ onSearch }) {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for item"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }
  