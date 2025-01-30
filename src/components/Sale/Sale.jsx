import { Link } from "react-router-dom";
import bigsummersale from "../../assets/images/big-summer-sale.png";

const Sale = () => {
  return (
    <section className="">
      <div className="relative text-white h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={bigsummersale}
          alt="Big Summer Sale"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-light">
            Big Summer <span className="font-bold text-white">Sale</span>
          </h1>
          <p className="text-gray-300 mt-2">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <Link
            to="/product/:id"
            className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300 mt-4 inline-block"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sale;
