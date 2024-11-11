import { noteBook } from "../assets/data";
import Card from "../components/Card";
import "../styles/noteBook.css";

const NoteBook = ({ cart, setCart }) => {
  return (
    <>
      <div>
        <header className="header">
          <h1>NoteBooks</h1>
          <p>
            Explore the MOST cutest and aesthetic stationery collection you have
            EVER SEEN!
          </p>
        </header>
        <div className="noteBook-container">
          {noteBook.map((ele) => (
            <Card setCart={setCart} cart={cart} key={ele.id} ele={ele} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteBook;
