import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../assets/styles/Footer.css'
import logo from '../assets/images/discountoGh.png'

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="footer-list-item">FAQs</li>
              <li className="footer-list-item">Contact Us</li>
              <li className="footer-list-item">Shipping Information</li>
              <li className="footer-list-item">Returns & Exchanges</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Discount Vouchers</h5>
            <ul className="list-unstyled">
              <li className="footer-list-item">Subscribe to Newsletter</li>
              <li className="footer-list-item">Special Offers</li>
              <li className="footer-list-item">Exclusive Deals</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Vouchers & Deals</h5>
            <ul className="list-unstyled">
              <li className="footer-list-item">Hot Deals</li>
              <li className="footer-list-item">Popular Vouchers</li>
              <li className="footer-list-item">Top Categories</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center mb-4">
              <img src={logo} alt="Logo" className="me-2" />
            </div>
            <div>
              <a href="https://www.facebook.com">
                <FaFacebook className="me-3" />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter className="me-3" />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
