/* eslint-disable react/prop-types */
import { notepads } from "../assets/data";
import Card from "../components/Card";

const Notepads = ({ cart, setCart }) => {
  return (
    <>
      <div>
        <header className="header">
          <h1>Notepads</h1>
          <p>
            Explore the MOST cutest and aesthetic stationery collection you have
            EVER SEEN!
          </p>
        </header>
        <div className="noteBook-container">
          {notepads.map((ele) => (
            <Card cart={cart} setCart={setCart} key={ele.id} ele={ele} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notepads;
