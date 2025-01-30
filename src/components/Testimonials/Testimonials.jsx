import { useState, useEffect, useRef } from "react";
import star from "../../assets/icons/star.svg";
import arrowdropdownwhite from "../../assets/icons/arrow-drop-down-white.svg";
import gracecarey from "../../assets/images/grace-carey.png";
import ronaldrichards from "../../assets/images/ronald-richards.png";
import darcyking from "../../assets/images/darcy-king.png";

const testimonials = [
  {
    img: gracecarey,
    name: "Grace Carey",
    date: "24 January,2023",
    stars: 4,
    content:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
  },
  {
    img: ronaldrichards,
    name: "Ronald Richards",
    date: "24 January,2023",
    stars: 5,
    content:
      "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.",
  },
  {
    img: darcyking,
    name: "Darcy King",
    date: "24 January,2023",
    stars: 4,
    content:
      "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition.",
  },
];

const Testimonials = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="max-w-4xl mx-auto rounded-lg p-6">
      {testimonials.map((testimonial, index) => (
        <div
          className="flex items-start relative bg-gray-100 shadow rounded-lg p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg mb-6"
          key={index}
        >
          <div className="flex-shrink-0">
            <div className="inline-block relative">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={testimonial.img}
                  alt={`Profile picture of ${testimonial.name}`}
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
              </div>
            </div>
          </div>
          <div className="ml-6">
            <p className="flex items-baseline">
              <span className="text-gray-900 font-bold">
                {testimonial.name}
              </span>
            </p>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, idx) => (
                <span key={idx}>
                  {idx < testimonial.stars && (
                    <img
                      src={star}
                      alt="Star Icon"
                      className="w-6 h-7 fill-current text-yellow-600"
                      aria-label={`Star ${idx + 1}`}
                    />
                  )}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <span className="text-gray-700 font-bold">
                {testimonial.date}
              </span>
              <p className="text-gray-700 mt-1">{testimonial.content}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-6">
        <div className="relative" ref={dropdownRef}>
          <button
            id="dropdownDefault"
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
            aria-controls="dropdown"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:bg-gray-700 transition duration-300"
          >
            View More
            <img
              src={arrowdropdownwhite}
              alt="Arrow Drop Down Icon"
              className="w-5 h-5 text-gray-500 ml-2"
            />
          </button>
          {dropdownOpen && (
            <div
              id="dropdown"
              className="z-10 bg-gray-100 dark:bg-black divide-y divide-gray-300 rounded-lg shadow-lg w-44 absolute mt-2 left-1/2 transform -translate-x-1/2"
            >
              <ul className="py-2 text-sm text-white">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                  >
                    Popular
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                  >
                    New
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                  >
                    Highly rated
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
                    Low rated
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
