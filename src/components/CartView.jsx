import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";

function CartView() {
  const context = useContext(cartContext);
  const { cart } = context;

  let carritovacio = false;

  if (carritovacio) {
    return <div>Tu carrito está vacio...</div>;
  }

  return (
    <div>
      {cart.map((item) => (
        <div>
          <h3> Producto: {item.title}</h3>
          <p> Precio: {item.price}</p>
          <p> Cantidad: {item.count}</p>
          <strong>total:{item.price * item.count}</strong>
        </div>
      ))}
    </div>
  );
}

export default CartView;
