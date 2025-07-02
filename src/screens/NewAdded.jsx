import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { useNavigate } from "react-router-dom";

const NewAdded = () => {
  const navigate = useNavigate();
  const addBookList = useSelector((store) => store?.book?.addedList);

  const handleAddBook = () => {
    navigate("/add-book");
  };

  return (
    <div className="px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 tracking-wide">
        📘 Newly Added Books {addBookList?.length}
      </h1>

      {addBookList?.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No books"
            className="w-32 h-32 mb-4 opacity-80"
          />
          <p className="text-lg text-gray-600 mb-4">
            No books have been added yet.
          </p>
          <button
            onClick={handleAddBook}
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            ➕ Add Now
          </button>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap p-2">
          {addBookList.map((book) => (
            <BookCard
              book={book}
              key={book.id}
              onViewDetails={() => navigate(`/details/${book.id}?isNew=true`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewAdded;
