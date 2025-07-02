import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleOption } from "../store/toggleSlice";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isOpen = useSelector((store) => store?.toggle?.isOpen);
  const dispatch = useDispatch();

  const toggleBrowseDropdown = () => {
    dispatch(toggleOption(isOpen));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md">
      <div className=" px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">📚 BookShelf</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/new-added"> New Added</Link>
          </li>

          {/* Dropdown (Desktop) */}
          <div className="relative">
            <li
              onClick={toggleBrowseDropdown}
              className="cursor-pointer hover:text-blue-600 list-none"
            >
              Browse Books ▾
            </li>
            {isOpen && (
              <ul className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md w-40 py-2 z-10">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <Link to="/browse-books/Fiction">Fiction</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <Link to="/browse-books/Non-Fiction">Non-Fiction</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <Link to="/browse-books/Science">Science</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <Link to="/browse-books/Biography">Biography</Link>
                </li>
              </ul>
            )}
          </div>

          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/add-book">Add Book</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/about">About-Us</Link>
          </li>
        </ul>

        {/* Profile Image (Desktop) */}
        <div className="hidden md:block">
          <img
            src="https://icon2.cleanpng.com/20180529/bxp/avpqkaq1b.webp"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700 font-medium">
          <div className="cursor-pointer hover:text-blue-600">
            {" "}
            <Link to="/">Home</Link>
          </div>
          <div className="cursor-pointer hover:text-blue-600">
            {" "}
            <Link to="/new-added"> New Added</Link>
          </div>

          {/* Browse Books (Mobile Dropdown) */}
          <div>
            <div
              className="cursor-pointer hover:text-blue-600"
              onClick={toggleBrowseDropdown}
            >
              Browse Books ▾
            </div>
            {isOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <div className="cursor-pointer hover:text-blue-600">
                  <Link to="/browse-books/Fiction">Fiction</Link>
                </div>
                <div className="cursor-pointer hover:text-blue-600">
                  <Link to="/browse-books/Non-Fiction">Non-Fiction</Link>
                </div>
                <div className="cursor-pointer hover:text-blue-600">
                  <Link to="/browse-books/Science">Science</Link>
                </div>
                <div className="cursor-pointer hover:text-blue-600">
                  <Link to="/browse-books/Biography">Biography</Link>
                </div>
              </div>
            )}
          </div>

          <div className="cursor-pointer hover:text-blue-600">
            {" "}
            <Link to="/add-book">Add Book</Link>
          </div>
          <div className="cursor-pointer hover:text-blue-600">
            {" "}
            <Link to="/about">About-Us</Link>
          </div>

          {/* Mobile Profile */}
          <img
            src="https://icon2.cleanpng.com/20180529/bxp/avpqkaq1b.webp"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
