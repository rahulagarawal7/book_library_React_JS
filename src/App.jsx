import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import NewAdded from "./screens/NewAdded";
import BrowseBooks from "./screens/BrowseBooks";
import AddBook from "./screens/AddBook";
import About from "./screens/About";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ErrorPage from "./screens/PageNotFound";
import BookDetails from "./screens/BookDetails";
import { useDispatch } from "react-redux";
import { closeOptions } from "./store/toggleSlice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div
        className="px-4 py-6"
        onClick={() => {
          dispatch(closeOptions());
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default App;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "new-added", element: <NewAdded /> },
      { path: "browse-books/:category", element: <BrowseBooks /> },
      { path: "add-book", element: <AddBook /> },
      { path: "about", element: <About /> },
      { path: "details/:id", element: <BookDetails /> },
    ],
  },
]);
