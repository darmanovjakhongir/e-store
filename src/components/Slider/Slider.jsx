import { Link } from "react-router-dom";
import sonyplaystation5 from "../../assets/images/sony-playstation-5.png";
import applemacbookpro14 from "../../assets/images/apple-macbook-pro-14.png";
import appleairpods from "../../assets/images/apple-airpods.png";
import applevisionpro from "../../assets/images/apple-vision-pro.png";
import appleiphone14promax from "../../assets/images/apple-iphone-14-pro-max.png";
import blackmagicpocketcinema from "../../assets/images/blackmagic-pocket-cinema.png";
import applewatch9 from "../../assets/images/apple-watch-9.png";
import samsunggalaxywatch6 from "../../assets/images/samsung-galaxy-watch6.png";
import samsunggalaxybudsfe from "../../assets/images/samsung-galaxy-buds-fe.png";
import samsunggalaxyzfold5 from "../../assets/images/samsung-galaxy-z-fold5.png";
import appleipad9 from "../../assets/images/apple-ipad-9.png";
import huaweiairpods from "../../assets/images/huawei-airpods.png";
import appleiphone14progold from "../../assets/images/apple-iphone-14-pro-gold.png";
import appleipadpro from "../../assets/images/apple-ipad-pro.png";
import samsunggalaxyz from "../../assets/images/samsung-galaxy-z.png";
import applemacbookpro from "../../assets/images/apple-macbook-pro.png";
import appleiphone14prowhite from "../../assets/images/apple-iphone-14-pro-white.png";
import "./Slider.css";

const Slider = () => {
  const products = [
    {
      img: sonyplaystation5,
      name: "Sony PlayStation 5",
      description: "Popular Products",
    },
    {
      img: applemacbookpro14,
      name: "Apple MacBook Pro 14",
      description: "Popular Products",
    },
    {
      img: appleairpods,
      name: "Apple AirPods Max",
      description: "Popular Products",
    },
    {
      img: applevisionpro,
      name: "Apple Vision Pro",
      description: "Popular Products",
    },
    {
      img: appleiphone14promax,
      name: "Apple iPhone 14 Pro Max",
      description: "Popular Products",
    },
    {
      img: blackmagicpocketcinema,
      name: "Blackmagic Pocket Cinema Camera",
      description: "Popular Products",
    },
    {
      img: applewatch9,
      name: "Apple Watch Series 9",
      description: "Popular Products",
    },
    {
      img: samsunggalaxywatch6,
      name: "Samsung Galaxy Watch6",
      description: "Popular Products",
    },
    {
      img: samsunggalaxybudsfe,
      name: "Samsung Galaxy Buds FE",
      description: "Popular Products",
    },
    {
      img: samsunggalaxyzfold5,
      name: "Samsung Galaxy Z Fold5 Unlocked",
      description: "Popular Products",
    },
    {
      img: appleipad9,
      name: "Apple iPad 9",
      description: "Popular Products"
    },
    {
      img: huaweiairpods,
      name: "Huawei AirPods",
      description: "Popular Products",
    },
    {
      img: appleiphone14progold,
      name: "Apple iPhone 14 Pro",
      description: "Popular Products",
    },
    {
      img: appleipadpro,
      name: "Apple iPad Pro",
      description: "Popular Products",
    },
    {
      img: samsunggalaxyz,
      name: "Samsung Galaxy Z",
      description: "Popular Products",
    },
    {
      img: applemacbookpro,
      name: "Apple MacBook Pro",
      description: "Popular Products",
    },
    {
      img: appleiphone14prowhite,
      name: "Apple iPhone 14 Pro",
      description: "Popular Products",
    },
  ];

  return (
    <section className="">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Popular Products
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex items-center animate-scroll">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 m-4 bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800"
            >
              <img
                src={product.img}
                alt={`Image of ${product.name}`}
                className="w-36 h-36 object-contain mb-4 mx-auto"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <Link
                to="/product/:id"
                className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300 transform -translate-y-2"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
