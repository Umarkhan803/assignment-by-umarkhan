import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img className="navLogo" src="/logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="navLinks">
          <li>
            <Link to="/shop/Notebooks">Notebooks</Link>
          </li>
          <li>
            <Link to="/shop/Planners">Planners</Link>
          </li>
          <li>
            <Link to="/shop/Notepads">Notepads</Link>
          </li>
          <li>
            <Link to="/shop/Sticky Notes">Sticky Notes</Link>
          </li>
        </ul>
        <div className="navItem">
          <input
            type="search"
            className="searchBox"
            placeholder="Search here..."
          />
          <Link to="/login">Log In</Link>
          <span>
            <Link to="/cart">cart</Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
