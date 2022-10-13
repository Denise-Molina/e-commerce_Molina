import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";

function CartView() {
  const context = useContext(cartContext);
  const { cart, getTotal } = context;

const total = getTotal()
console.log(cart)


  return (
    <div>
      {cart.map((item) => (
        <div>
          <h3> Producto: {item.title}</h3>
          <p> Precio: {item.price}</p>
          <p> Cantidad: {item.count}</p>
        </div>
      ))}
      <strong> Total:{total} </strong>
    </div>
  );
}

export default CartView;
