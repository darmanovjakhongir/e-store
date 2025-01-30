import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import filter from "../../assets/icons/filter.svg";
import arrowdropdown from "../../assets/icons/arrow-drop-down.svg";
import arrowright from "../../assets/icons/arrow-right.svg";
import favorite from "../../assets/icons/favorite.svg";
import appleiphone14promax from "../../assets/images/apple-iphone-14-pro-max.png";
import blackmagicpocketcinema from "../../assets/images/blackmagic-pocket-cinema.png";
import applewatch9 from "../../assets/images/apple-watch-9.png";
import appleairpods from "../../assets/images/apple-airpods.png";
import samsunggalaxywatch6 from "../../assets/images/samsung-galaxy-watch6.png";
import samsunggalaxyzfold5 from "../../assets/images/samsung-galaxy-z-fold5.png";
import samsunggalaxybudsfe from "../../assets/images/samsung-galaxy-buds-fe.png";
import appleipad9 from "../../assets/images/apple-ipad-9.png";

const Product = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = (event) => {
    if (
      event.target.closest("#dropdownDefault") === null &&
      event.target.closest("#dropdown") === null
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const products = [
    {
      img: appleiphone14promax,
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
      price: "$900",
    },
    {
      img: blackmagicpocketcinema,
      name: "Blackmagic Pocket Cinema Camera 6k",
      price: "$2535",
    },
    {
      img: applewatch9,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: "$399",
    },
    {
      img: appleairpods,
      name: "AirPods Max Silver Starlight Aluminium",
      price: "$549",
    },
    {
      img: samsunggalaxywatch6,
      name: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: "$369",
    },
    {
      img: samsunggalaxyzfold5,
      name: "Galaxy Z Fold5 Unlocked",
      price: "$1799",
    },
    { img: samsunggalaxybudsfe, name: "Galaxy Buds FE", price: "$99.99" },
    { img: appleipad9, name: "Apple iPad 9", price: "$398" },
  ];

  return (
    <div>
      <nav
        className="flex justify-between px-4 py-3 text-white bg-black sm:px-5"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
          <li>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-400 transition-all"
              >
                New Arrival
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-400 transition-all"
              >
                Bestseller
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-400 transition-all"
              >
                Featured Products
              </a>
            </div>
          </li>
        </ol>
        <div>
          <button
            id="dropdownDefault"
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
            aria-controls="dropdown"
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg transition-all"
            aria-label="Toggle filters"
          >
            <img
              src={filter}
              alt="Filter Icon"
              className="w-5 h-5 text-gray-500 mr-2"
            />
            Filter
            <img
              src={arrowdropdown}
              alt="Arrow Drop Down Icon"
              className="w-5 h-5 text-gray-500 ml-2"
            />
          </button>
          <div
            id="dropdown"
            className={`z-10 ${dropdownOpen ? "" : "hidden"} bg-white divide-y divide-gray-300 rounded-lg shadow-lg w-44 dark:bg-black mt-2 absolute right-0`}
          >
            <ul className="py-2 text-sm text-black dark:text-white">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                >
                  Price
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                >
                  Product Type
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                >
                  Brand
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                >
                  Color
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors flex justify-between items-center"
                >
                  More Filters
                  <img
                    src={arrowright}
                    alt="Arrow Right Icon"
                    className="w-5 h-5 text-gray-500 ml-2"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="relative bg-gray-100 shadow rounded-lg p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link
                  to="/favorites"
                  className="absolute top-2 left-2 p-2 rounded-full transition-all duration-300 hover:opacity-80"
                >
                  <img
                    src={favorite}
                    alt={`Favorite Icon for ${product.name}`}
                    className="w-6 h-6"
                  />
                </Link>
                <img
                  src={product.img}
                  alt={`Image of ${product.name}`}
                  className="w-full mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <Link
                  to="/product/:id"
                  className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
