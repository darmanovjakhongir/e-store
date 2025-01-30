import { Link } from "react-router-dom";
import iphone14pro from "../../assets/videos/intro-video.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          src={iphone14pro}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          preload="metadata"
          aria-label="iPhone 14 Pro promotional video"
        />
      </div>
      <main className="container mx-auto flex flex-col lg:flex-row items-center py-16 px-6 z-10 relative">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-gray-600 shadow-md">
            Pro.Beyond.
          </h1>
          <p className="text-xl lg:text-2xl mb-6 text-white px-4 py-2 rounded-lg">
            iPhone 14 Pro
          </p>
          <p className="text-xl mb-6 text-gray-600 lg:text-2xl">
            Created to change everything for the better. For everyone.
          </p>
          <Link
            to="/product/:id"
            className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </main>
    </section>
  );
}

export default Hero;
