import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import instagram from "../../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-bold mb-4">
            <span className="text-gray-600">E </span>Store
          </h4>
          <p className="mt-2 text-sm">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than just design services.
          </p>
          <nav className="mt-4 flex space-x-4">
            <a
              href="#twitter"
              className="hover:opacity-80"
              aria-label="Follow us on Twitter"
              title="Twitter"
            >
              <img src={twitter} alt="Twitter Icon" className="w-6 h-6" />
            </a>
            <a
              href="#facebook"
              className="hover:opacity-80"
              aria-label="Follow us on Facebook"
              title="Facebook"
            >
              <img src={facebook} alt="Facebook Icon" className="w-6 h-6" />
            </a>
            <a
              href="#tiktok"
              className="hover:opacity-80"
              aria-label="Follow us on TikTok"
              title="TikTok"
            >
              <img src={tiktok} alt="TikTok Icon" className="w-6 h-6" />
            </a>
            <a
              href="#instagram"
              className="hover:opacity-80"
              aria-label="Follow us on Instagram"
              title="Instagram"
            >
              <img src={instagram} alt="Instagram Icon" className="w-6 h-6" />
            </a>
          </nav>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-600">
                Bonus Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Credit and Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Service Contracts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Non-Cash Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Payment
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Assistance to the Buyer</h4>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-600">
                Find an Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Terms of Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Exchange and Return of Goods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Guarantee
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Frequently Asked Questions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Terms of Use of the Site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
