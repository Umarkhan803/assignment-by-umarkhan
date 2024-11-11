import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logo">
          <Link to="/">
            <img className="footer-logo" src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="comp">
          <h3>Shop</h3>
          <label>
            <Link to="/shop/Notebooks">Notebooks</Link>{" "}
          </label>
          <label>
            <Link to="/shop/Planners">Planners</Link>
          </label>
          <label>
            <Link to="/shop/Notepads">Notepads</Link>
          </label>
          <label>
            <Link to="/shop/Sticky Notes">Sticky Notes</Link>
          </label>
        </div>
        <div className="comm">
          <h3>Policy</h3>
          <label>Shipping & Returns</label>
          <label>Store Policy</label>
          <label>Payment Methods</label>
          <label>Blog</label>
        </div>
        <div className="use">
          <h3>Contact Us</h3>
          <label>Tel. 70078 19835</label>
          <label>thepurplestarshop@gmail.com</label>
          <label>support@thecreatorcloset.com</label>
          <label>Join Our Affiliate And Earn</label>
          <div className="logo">
            <i className="fa-brands fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
