import { useState, useRef, useEffect } from "react";
import arrowdropdownwhite from "../../assets/icons/arrow-drop-down-white.svg";
import arrowright from "../../assets/icons/arrow-right.svg";

const Details = () => {
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
    <section className="">
      <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          <p className="text-gray-600 text-sm mb-6">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
          </p>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold mb-2">Screen</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex justify-between">
                <span>Screen diagonal</span>
                <span className="font-medium">6.7"</span>
              </li>
              <li className="flex justify-between">
                <span>The screen resolution</span>
                <span className="font-medium">2796x1290</span>
              </li>
              <li className="flex justify-between">
                <span>The screen refresh rate</span>
                <span className="font-medium">120 Hz</span>
              </li>
              <li className="flex justify-between">
                <span>The pixel density</span>
                <span className="font-medium">460 ppi</span>
              </li>
              <li className="flex justify-between">
                <span>Screen type</span>
                <span className="font-medium">OLED</span>
              </li>
              <li className="flex justify-between">
                <span>Additionally</span>
                <span className="font-medium text-right">
                  Dynamic Island, Always-On display, HDR display, True Tone,
                  Wide color (P3)
                </span>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">CPU</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex justify-between">
                <span>CPU</span>
                <span className="font-medium">A16 Bionic</span>
              </li>
              <li className="flex justify-between">
                <span>Number of cores</span>
                <span className="font-medium">6</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-6">
            <div className="relative" ref={dropdownRef}>
              <button
                id="dropdownDefault"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
                aria-controls="dropdown"
                aria-haspopup="true"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:bg-gray-700 transition duration-300"
              >
                View More
                <img
                  src={arrowdropdownwhite}
                  alt="Arrow Drop Down Icon"
                  className="w-5 h-5 text-gray-500 ml-2"
                />
              </button>
              <div
                id="dropdown"
                className={`z-10 absolute mt-2 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-black divide-y divide-gray-300 rounded-lg shadow-lg w-44 py-2 text-sm text-white transition-opacity duration-300 ${
                  dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                    >
                      Screen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                    >
                      CPU
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                    >
                      Core
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                    >
                      Camera
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                    >
                      Battery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors flex justify-between items-center"
                    >
                      More Details
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
