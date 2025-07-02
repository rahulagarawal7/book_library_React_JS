import { useParams } from "react-router-dom";
import { books } from "../utils/bookList";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = new URLSearchParams(window.location.search);
  const isNew = searchParams.get("isNew") === "true";
  const newAddedBook = useSelector((store) => store.book.addedList);

  useEffect(() => {
    if (isNew) {
      const book = newAddedBook.find((b) => b.id.toString() == id);
      setBook(book);
    } else {
      const book = books.find((b) => b.id.toString() === id);
      setBook(book);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Book Not Found
        </h2>
        <p className="text-gray-500 max-w-md">
          The book you're looking for doesn't exist or may have been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Book Header */}
        <div className="flex flex-col md:flex-row gap-8 p-6 sm:p-8">
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x450?text=No+Cover";
                e.target.className =
                  "w-full h-auto object-cover rounded-lg shadow-md border border-gray-200";
              }}
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col h-full">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  {book.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  by {book.authorName}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      book.category === "Fiction"
                        ? "bg-purple-100 text-purple-800"
                        : book.category === "Non-Fiction"
                        ? "bg-blue-100 text-blue-800"
                        : book.category === "Science"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {book.category}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {book.numberOfPages} pages
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    ⭐ {book.rating}/5
                  </span>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {book.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                </p>
              </div>

              <div className="mt-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-gray-500 font-medium">Published</div>
                  <div className="font-semibold">
                    {new Date(book.dateOfPublication).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-gray-500 font-medium">Language</div>
                  <div className="font-semibold">English</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-gray-500 font-medium">ISBN</div>
                  <div className="font-semibold">
                    {book.isbn || "978-3-16-148410-0"}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-gray-500 font-medium">Publisher</div>
                  <div className="font-semibold">
                    {book.publisher || "Penguin Random House"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="border-t border-gray-200 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            About the Author
          </h3>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Similar Books
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer">
                  • "The Great Gatsby" by F. Scott Fitzgerald
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  • "To Kill a Mockingbird" by Harper Lee
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  • "1984" by George Orwell
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Book Details</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Dimensions:</strong> 5.5 x 1.2 x 8.4 inches
                </li>
                <li>
                  <strong>Weight:</strong> 1.2 pounds
                </li>
                <li>
                  <strong>Edition:</strong> First Edition
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 p-6 sm:p-8 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Customer Reviews
          </h3>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <div className="flex items-center text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < 4 ? "★" : "☆"}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  John D. • {new Date().toLocaleDateString()}
                </span>
              </div>
              <h4 className="font-medium text-gray-800 mb-1">Amazing read!</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <div className="flex items-center text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < 3 ? "★" : "☆"}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  Sarah M. • {new Date().toLocaleDateString()}
                </span>
              </div>
              <h4 className="font-medium text-gray-800 mb-1">
                Good but lengthy
              </h4>
              <p className="text-gray-600 text-sm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
