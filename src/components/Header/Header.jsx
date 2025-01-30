import { useState } from "react";
import { Link } from "react-router-dom";
import search from "../../assets/icons/search.svg";
import favorite from "../../assets/icons/favorite.svg";
import shoppingcart from "../../assets/icons/shopping-cart.svg";
import user from "../../assets/icons/user.svg";
import menu from "../../assets/icons/menu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-white/50 text-black shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl text-black font-bold">
          <span className="text-gray-600">E </span>Store
        </h1>
        <div className="relative flex items-center">
          <img
            src={search}
            alt="Search Icon"
            className="absolute left-3 w-5 h-5 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring focus:ring-gray-500"
            aria-label="Search products"
          />
        </div>
        <nav
          className={`lg:flex gap-6 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"} lg:block`}
          id="mobile-menu"
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <li>
              <Link to="/" className="text-black hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/help/contact" className="text-black hover:text-gray-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blog/:id" className="text-black hover:text-gray-600">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/favorites" className="hover:opacity-80">
            <img src={favorite} alt="Favorite Icon" className="w-6 h-6" />
          </Link>
          <Link to="/orders/create" className="hover:opacity-80">
            <img
              src={shoppingcart}
              alt="Shopping Cart Icon"
              className="w-6 h-6"
            />
          </Link>
          <Link to="/user/:id" className="hover:opacity-80">
            <img src={user} alt="User Icon" className="w-6 h-6" />
          </Link>
          <button
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <img src={menu} alt="Menu Icon" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
