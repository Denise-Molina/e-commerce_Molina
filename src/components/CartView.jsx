import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

function CartView() {
  const context = useContext(cartContext);
  const { cart, getTotal, removeItem, emptyCart } = context;

  const total = getTotal();
  console.log(cart);

  return cart.length === 0 ? (
    <div className="centro">
      <h2 className="title">Mi carrito</h2>
      <h4>Tu carrito se encuentra vacio...</h4>
      <Link to="/">
        <button className="btn_seguir">Seguir comprando</button>
      </Link>
    </div>
  ) : (
    <>
      <div>
        <h2 className="title">Mi carrito</h2>
        <table className="cartList">
          <thead className="cartList_head">
            <tr className="cartList_row">
              <th>Producto</th>
              <th>Precio por unidad</th>
              <th>Cantidad</th>
              <th>Remover</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id} className="cartList_row">
                  <td> {item.title}</td>
                  <td> {item.price}</td>
                  <td> {item.count}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={() => removeItem(item.id)}>
                      X
                    </Button>
                  </td>
                  <th>${item.price * item.count} </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <table>
            <tbody>
              <tr className="cartList_row">
                <td className="btn">
                  <button className="btn_vaciar" onClick={emptyCart}>
                    Vaciar carrito
                  </button>
                </td>
                <td>
                  <Link to="/">
                    <button className="btn_seguir">Seguir Comprando</button>
                  </Link>
                </td>
                <td className="btnT">
                  <h6> El total de tu compra es de ${total} </h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CheckoutForm />
      </div>
    </>
  );
}

export default CartView;
