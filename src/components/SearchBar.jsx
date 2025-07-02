import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() && onSearch) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) onSearch("");
  };

  return (
    <div className="flex justify-center w-full px-4">
      <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-2xl">
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books..."
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-amber-500 focus:border-transparent transition-all"
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <button
          onClick={handleSearch}
          disabled={!query.trim()}
          className="w-full sm:w-auto px-6 py-3  bg-amber-500 hover:bg-amber-600 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
