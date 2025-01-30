import { Link } from "react-router-dom";
import favorite from "../../assets/icons/favorite.svg";
import appleiphone14progold from "../../assets/images/apple-iphone-14-pro-gold.png";
import appleairpods from "../../assets/images/apple-airpods.png";
import applewatch9 from "../../assets/images/apple-watch-9.png";
import appleiphone14prowhite from "../../assets/images/apple-iphone-14-pro-white.png";

const Related = () => {
  const products = [
    {
      img: appleiphone14progold,
      name: "Apple iPhone 14 Pro 512GB Gold",
      price: "$1437",
    },
    {
      img: appleairpods,
      name: "AirPods Max Silver Starlight Aluminium",
      price: "$549",
    },
    {
      img: applewatch9,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: "$399",
    },
    {
      img: appleiphone14prowhite,
      name: "Apple iPhone 14 Pro 1TB White",
      price: "$1499",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
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
  );
}

export default Related;
