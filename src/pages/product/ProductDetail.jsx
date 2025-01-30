import Header from "../../components/Header/Header";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Details from "../../components/Details/Details";
import Reviews from "../../components/Reviews/Reviews";
import Testimonials from "../../components/Testimonials/Testimonials";
import Related from "../../components/Related/Related";
import Footer from "../../components/Footer/Footer";

const ProductDetail = () => {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Details />
      <Reviews />
      <Testimonials />
      <Related />
      <Footer />
    </div>
  );
}

export default ProductDetail;
