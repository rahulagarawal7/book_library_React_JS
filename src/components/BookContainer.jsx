import { useNavigate } from "react-router-dom";
import { books } from "../utils/bookList";
import BookCard from "./BookCard";

const BookContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row flex-wrap p-2">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onViewDetails={() => navigate(`/details/${book.id}`)}
        />
      ))}
    </div>
  );
};
export default BookContainer;
