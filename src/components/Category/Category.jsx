import { Link } from "react-router-dom";
import phone from "../../assets/icons/phone.svg";
import smartwatch from "../../assets/icons/smart-watch.svg";
import camera from "../../assets/icons/camera.svg";
import headphone from "../../assets/icons/headphone.svg";
import computer from "../../assets/icons/computer.svg";
import gaming from "../../assets/icons/gaming.svg";

const Category = () => {
  const categories = [
    { img: phone, name: "Phones" },
    { img: smartwatch, name: "Smart Watches" },
    { img: camera, name: "Cameras" },
    { img: headphone, name: "Headphones" },
    { img: computer, name: "Computers" },
    { img: gaming, name: "Gaming" },
  ];

  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Browse By Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to="/product/:id"
            className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            role="button"
            aria-label={`Shop ${category.name} category`}
          >
            <img
              src={category.img}
              alt={`Image of ${category.name.toLowerCase()} icon`}
              className="w-16 h-16 object-cover mb-2 rounded-lg"
            />
            <span className="text-sm font-medium text-gray-900">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;
