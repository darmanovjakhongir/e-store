import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";
import Category from "../../components/Category";
import Product from "../../components/Product";
import Slider from "../../components/Slider";
import Discount from "../../components/Discount";
import Sale from "../../components/Sale";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Carousel />
      <Category />
      <Product />
      <Slider />
      <Discount />
      <Sale />
      <Footer />
    </div>
  );
}

export default Home;
