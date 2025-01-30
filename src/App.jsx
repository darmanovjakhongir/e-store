import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

import Home from "./pages/home/Home";
import About from "./pages/about/About";

import ProductDetail from "./pages/product/ProductDetail";

import CreateOrder from "./pages/orders/CreateOrder";

import UserDetail from "./pages/user/UserDetail";

import Contact from "./pages/help/Contact";

import Favorites from "./pages/favorites/Favorites";

import BlogDetail from "./pages/blog/BlogDetail";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />

        <Route path={routes.productDetail} element={<ProductDetail />} />

        <Route path={routes.createOrder} element={<CreateOrder />} />

        <Route path={routes.userDetail} element={<UserDetail />} />

        <Route path={routes.contact} element={<Contact />} />

        <Route path={routes.favorites} element={<Favorites />} />

        <Route path={routes.blogDetail} element={<BlogDetail />} />

        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
