import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import Slider from "../../components/Slider/Slider";
import Discount from "../../components/Discount/Discount";
import Sale from "../../components/Sale/Sale";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
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
