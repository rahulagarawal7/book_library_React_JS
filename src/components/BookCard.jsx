import { useState } from "react";

const BookCard = ({ book, onViewDetails }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-82 m-5 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Cover Image with Gradient Overlay */}
      <div className="relative w-full h-80">
        {/* Loader Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
            <div className="w-6 h-6 border-2 border-gray-300 border-t-amber-500 rounded-full animate-spin" />
          </div>
        )}

        {/* Image */}
        <img
          src={book.coverImage}
          alt={book.title}
          className={`w-full h-80 object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/288x416?text=No+Cover";
            setIsLoading(false);
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
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
        </div>

        {/* Title & Author */}
        <h2 className="text-xl font-bold text-gray-900 line-clamp-1 mb-1">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 mb-3">by {book.authorName}</p>

        {/* Description */}
        <p className="text-sm text-gray-700 line-clamp-2 mb-4">
          {book.description}
        </p>

        {/* Metadata */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(book.dateOfPublication).getFullYear()}
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            {book.numberOfPages}p
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {book.rating}
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails?.(book)}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center"
        >
          View Details
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
