import { BsCart } from "react-icons/bs";
import React, { useContext } from "react";
import { cartContext } from "./cartContext";

function CartWidget() {
  const { cart } = useContext(cartContext);

  return (
    <div>
      <button type="button" className="btn__carrito">
        <BsCart />
      </button>
      <span> { cart.length} </span>
    </div>
  );
}

export default CartWidget;
