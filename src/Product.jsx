import { useContext } from "react";
import { CartContext } from "./cartcontext";

function ProductsPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Laptop", price: 55000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <div className="box">
      <h2>Products Page</h2>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;