# 📚 React Book Library App (Vite + React + Redux)

A modern and responsive book library web application built using **React.js**, **Vite**, and **Redux Toolkit**. The app allows users to browse books by category, view detailed information, and add new books to the library.

---
##Deployment Link-
--https://book-library-react-js.vercel.app/

## How to run

- npm install
- npm run dev
- Visit: http://localhost:5173

## 🚀 Features

### 🏠 Home Page

- Welcome landing page with book categories (e.g., Fiction, Non-Fiction, Sci-Fi, etc.)
- List of popular books with links to view details
- Navigation bar with links to:
  - Home
  - Browse Books
  - Add Book
- Loader added to simulate real loading experience

### 📚 Browse Books Page

- Displays a list of books, filterable by category
- Dynamic routing (`/books/:category`) for category filtering
- Search functionality to filter books by title or author
- Each book has a "View Details" button

### 📖 Book Details Page

- Dynamic route (`/details/:id`) shows selected book details
- Displays:
  - Title
  - Author
  - Description
  - Rating
  - Other metadata (e.g., publication date, publisher)
- "Back to Browse" button
- Loader for real-feel experience

### ➕ Add Book Page

- A form to add a new book with:
  - Title
  - Author
  - Category
  - Description
  - Rating
- Form validation to ensure all fields are filled correctly
- Uses **Redux Toolkit** to manage and update the book list
- After submission, redirects to Browse Books showing the newly added book

### ❌ 404 Page

- Custom "Page Not Found" for undefined routes
- Link to navigate back to the Home page

---

## 🧱 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📂 Project Structure

src/
│
├── components/ # Shared UI components (e.g., BookCard, Loader)
├── pages/ # Page components (Home, Browse, Details, AddBook, NotFound)
├── redux/ # Redux slice and store setup
├── utils/ # Dummy data or constants
├── App.jsx # App entry with route definitions
└── main.jsx # ReactDOM render with provider
