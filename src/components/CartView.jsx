import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";
import { createBuyOrder } from "../firestore";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function CartView() {
  const context = useContext(cartContext);
  const { cart, getTotal, removeItem, emptyCart } = context;

  const total = getTotal();
  console.log(cart);

  function handleCheckout() {
    const orderData = {
      buyer: {
        name: "Denise",
        phone: "1168562656",
        email: "denmolina@gmail.com",
      },
      items: cart,
      total: getTotal(),
    };
    createBuyOrder(orderData).then(() => {
      Swal.fire("Su orden ya se encunetra en producción");
      emptyCart();
    });
  }

  return (
    <>
      <div>
        <h3>Mi carrito</h3>
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
            <tr className="cartList_row">
              <td className="btn">
                <Button variant="success" onClick={handleCheckout}>
                  Finalizar Compra
                </Button>
              </td>
              <td className="btn">
                <Button variant="danger" onClick={emptyCart}>
                  Vaciar carrito
                </Button>
              </td>
              <td>
                <Link to="/">
                  <Button variant="info">Seguir Comprando</Button>
                </Link>
              </td>
              <td className="btnT">
                <h6> El total de tu compra es de ${total} </h6>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default CartView;
