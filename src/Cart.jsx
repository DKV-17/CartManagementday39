import { useContext } from "react";
import { CartContext } from "./cartcontext";


function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="box">
      <h2>Cart Page</h2>

      <h3>Total Items: {cartItems.length}</h3>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <p>{item.name} - ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;