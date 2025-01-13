import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Blog, Favorites, ShoppingCart, User, ProductDetails } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/user" element={<User  />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
