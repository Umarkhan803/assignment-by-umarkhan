import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img
              src="https://static.wixstatic.com/media/a613c3_83c07f8ed1dd49b9b30eb82b87395db9~mv2.png/v1/fill/w_129,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/the%20purple%20star%20(1)_edited.png"
              alt="logo"
            />
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
