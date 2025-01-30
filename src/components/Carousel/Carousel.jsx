import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import prev from "../../assets/icons/prev.svg";
import next from "../../assets/icons/next.svg";
import sonyplaystation5pro from "../../assets/images/sony-playstation-5-pro.jpg";
import applemacbookpro16 from "../../assets/images/apple-macbook-pro-16.jpg";
import appleairpodsmaxsilver from "../../assets/images/apple-airpods-max-silver.jpg";
import applevisionproos2 from "../../assets/images/apple-vision-pro-os2.jpg";

const slides = [
  {
    img: sonyplaystation5pro,
    label: "Playstation 5",
    description:
      "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
  },
  {
    img: applemacbookpro16,
    label: "Macbook Pro",
    description:
      "The new 14-inch MacBook Pro makes room for more of what you love with a spacious Liquid Retina display.",
  },
  {
    img: appleairpodsmaxsilver,
    label: "Apple AirPods Max",
    description: "Computational audio. Listen, it's powerful",
  },
  {
    img: applevisionproos2,
    label: "Apple Vision Pro",
    description: "An immersive way to experience entertainment",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Image Carousel"
      className="relative h-[500px] w-full bg-gray-100"
    >
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={currentIndex !== index}
            role="group"
          >
            <img
              src={slide.img}
              alt={`Image of ${slide.label}: ${slide.description}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-[15%] bottom-16 text-center text-black">
              <h1 className="text-4xl md:text-5xl font-semibold mb-2">
                {slide.label}
              </h1>
              <p className="text-gray-700 mb-4">{slide.description}</p>
            </div>
            <Link
              to="/product/:id"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        <img src={prev} alt="Previous" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        <img src={next} alt="Next" />
      </button>
    </section>
  );
}

export default Carousel;
