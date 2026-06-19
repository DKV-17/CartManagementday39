import { useState } from "react";
import { CartContext } from "./cartcontext";
import ProductsPage from "./Product";
import CartPage from "./Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <div className="container">
        <h1>Cart Management Using Context</h1>

        <div className="pages">
          <ProductsPage />
          <CartPage />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;