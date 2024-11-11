import toast from "react-hot-toast";
import "../styles/cart.css";
/* eslint-disable react/prop-types */
const Cart = ({ cart, setCart }) => {
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; // Prevent quantity less than 1
    setCart(
      cart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <>
      <div className="cart-container">
        <div className="item">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cartItem" key={item.id}>
                <img className="cartImg" src={item.img} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>

                  <button
                    className="btn-decrement"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <button
                    className=" btn-increment"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="total">
          <div>
            <h3 className="total-title">Total Price</h3>
            <div className="total-content">
              <span>Shipping</span> 10
            </div>
            <h3 className="total-price">
              Total: $
              {cart.reduce(
                (total, item) => total + 10 + item.price * item.quantity,
                0
              )}
            </h3>
            <button
              onClick={() => toast.success("Your Order Is Place")}
              className="price-btn">
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
