import { stickyNotes } from "../assets/data";
import Card from "../components/Card";

const StickyNotes = ({ cart, setCart }) => {
  return (
    <div>
      <header className="header">
        <h1>Sticky Notes</h1>
        <p>
          Explore the MOST cutest and aesthetic stationery collection you have
          EVER SEEN!
        </p>
      </header>
      <div className="noteBook-container">
        {stickyNotes.map((ele) => (
          <Card cart={cart} setCart={setCart} key={ele.id} ele={ele} />
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;
