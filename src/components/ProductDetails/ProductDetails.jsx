import { useState } from "react";
import { Link } from "react-router-dom";
import screensize from "../../assets/icons/screen-size.svg";
import cpu from "../../assets/icons/cpu.svg";
import core from "../../assets/icons/core.svg";
import maincamera from "../../assets/icons/main-camera.svg";
import frontcamera from "../../assets/icons/front-camera.svg";
import battery from "../../assets/icons/battery.svg";
import delivery from "../../assets/icons/delivery.svg";
import instock from "../../assets/icons/in-stock.svg";
import guaranteed from "../../assets/icons/guaranteed.svg";
import shoppingcart01 from "../../assets/icons/shopping-cart-01.svg";
import appleiphone14promax01 from "../../assets/images/apple-iphone-14-pro-max-01.png";
import appleiphone14promax02 from "../../assets/images/apple-iphone-14-pro-max-02.png";
import appleiphone14promax03 from "../../assets/images/apple-iphone-14-pro-max-03.png";
import appleiphone14promax04 from "../../assets/images/apple-iphone-14-pro-max-04.png";

const ProductDetail = () => {
  const categories = [
    { img: screensize, name: "Screen size 6.7" },
    { img: cpu, name: "CPU Apple A16 Bionic" },
    { img: core, name: "Number of Cores 6" },
    { img: maincamera, name: "Main camera 48-12-12 MP" },
    { img: frontcamera, name: "Front-camera 12 MP" },
    { img: battery, name: "Battery capacity 4323 mAh" },
  ];

  const guarantee = [
    { img: delivery, name: "Free Delivery", label: "1-2 day" },
    { img: instock, name: "In Stock", label: "Today" },
    { img: guaranteed, name: "Guaranteed", label: "1 year" },
  ];

  const [mainImage, setMainImage] = useState(appleiphone14promax01);
  const [quantity, setQuantity] = useState(1);

  const handleImageChange = (img) => {
    setMainImage(img);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const thumbnails = [
    { img: appleiphone14promax01, alt: "Apple iPhone 14 Pro Max Image 1" },
    { img: appleiphone14promax02, alt: "Apple iPhone 14 Pro Max Image 2" },
    { img: appleiphone14promax03, alt: "Apple iPhone 14 Pro Max Image 3" },
    { img: appleiphone14promax04, alt: "Apple iPhone 14 Pro Max Image 4" },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt="Product"
              className="w-3/4 h-auto rounded-lg shadow-md mb-4 mx-auto"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail.img}
                  alt={thumbnail.alt}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => handleImageChange(thumbnail.img)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">Apple iPhone 14 Pro Max</h2>
            <div className="mb-4">
              <span className="text-gray-900 text-2xl font-bold mr-2">
                $1399
              </span>
              <span className="text-gray-500 line-through">$1499</span>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Select color :</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-purple-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                <button className="w-8 h-8 bg-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"></button>
                <button className="w-8 h-8 bg-yellow-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
              </div>
            </div>
            <div className="">
              <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                128GB
              </button>
              <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                256GB
              </button>
              <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                512GB
              </button>
              <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                1TB
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to="/product/:id"
                  className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                  role="button"
                  aria-label={`Shop ${category.name}`}
                >
                  <div className="flex flex-row-reverse items-center justify-between w-full">
                    <span className="text-sm font-medium text-gray-700 text-center">
                      {category.name}
                    </span>
                    <img
                      src={category.img}
                      alt={`Image of ${category.name.toLowerCase()}`}
                      className="w-10 h-10 object-cover mb-2"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              Enhanced capabilities thanks to an enlarged display of 6.7 inches
              and work without recharging throughout the day. Incredible photos
              as in weak, yes and in bright light using the new system with two
              cameras more...
            </p>
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-bold text-gray-900 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="flex space-x-4 mb-6">
              <Link
                to="/product/:id"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Add to Wishlist
              </Link>
              <Link
                to="/orders/create"
                className="flex items-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                <img
                  src={shoppingcart01}
                  alt="Shopping Cart Icon"
                  className="w-6 h-6 mr-2"
                />
                Add to Cart
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {guarantee.map((item, index) => (
                <Link
                  key={index}
                  to="/product/:id"
                  className="bg-gray-100 rounded-lg p-4 flex items-center justify-start space-x-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  role="button"
                  aria-label={`Guarantee ${index + 1}`}
                >
                  <img
                    src={item.img}
                    alt={`Guarantee ${index + 1}`}
                    className="w-10 h-10 mb-2"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-bold text-black">{item.name}</p>
                    <p className="text-xs text-gray-700 font-medium">
                      {item.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
