import Header from "../../components/Header";
import ProductDetail from "../../components/ProductDetail";
import Details from "../../components/Details";
import Reviews from "../../components/Reviews";
import Testimonials from "../../components/Testimonials";
import Related from "../../components/Related";
import Footer from "../../components/Footer";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <Header />
      <ProductDetail />
      <Details />
      <Reviews />
      <Testimonials />
      <Related />
      <Footer />
    </div>
  );
}

export default ProductDetails;
