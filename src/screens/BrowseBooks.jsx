import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { books } from "../utils/bookList";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

const BrowseBooks = () => {
  const { category } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Format category name for display
  const formatCategoryName = (cat) => {
    return cat
      .toLowerCase()
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Reusable function to get books by category
  const getBooksByCategory = () => {
    return books.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
  };

  // Set books when category changes
  useEffect(() => {
    const categoryBooks = getBooksByCategory();
    setFilteredBooks(categoryBooks);
    setSearchQuery(""); // Reset search when category changes
  }, [category]);

  // Handle search by title or author
  const handleSearch = (query) => {
    const searchTerm = query.trim().toLowerCase();
    setSearchQuery(searchTerm);

    if (!searchTerm) {
      setFilteredBooks(getBooksByCategory());
      return;
    }

    const filtered = getBooksByCategory().filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.authorName.toLowerCase().includes(searchTerm)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {formatCategoryName(category)} Books
        </h1>
        <p className="text-gray-600">
          {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}{" "}
          available
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar
          onSearch={handleSearch}
          placeholder={`Search ${formatCategoryName(category)} books...`}
        />
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {searchQuery
              ? `No books found matching "${searchQuery}"`
              : `No books available in ${formatCategoryName(
                  category
                )} category`}
          </p>
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;
