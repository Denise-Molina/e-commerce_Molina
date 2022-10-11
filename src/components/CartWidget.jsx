import { BsCart } from "react-icons/bs";
import React, { useContext } from "react";
import { cartContext } from "./cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartContext);

  return (
    <div>
      <Link className="enlace" to="/cart">
        <button type="button" className="btn__carrito">
          <BsCart />
        </button>
      </Link>
      <span> {getTotalItemsInCart()} </span>
    </div>
  );
}

export default CartWidget;
