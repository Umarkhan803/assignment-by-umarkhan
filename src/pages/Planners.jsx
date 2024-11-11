import { planner } from "../assets/data";
import Card from "../components/Card";

const Planners = ({ cart, setCart }) => {
  return (
    <>
      <div>
        <header className="header">
          <h1>Planners</h1>
          <p>
            Explore the MOST cutest and aesthetic stationery collection you have
            EVER SEEN!
          </p>
        </header>
        <div className="noteBook-container">
          {planner.map((ele) => (
            <Card cart={cart} setCart={setCart} key={ele.id} ele={ele} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Planners;
