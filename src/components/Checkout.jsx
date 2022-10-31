import React from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Checkout() {
  const { orderID } = useParams();

  return (
    <div className="checkout">
      <h2 className="checkout-items">¡Su compra se ha realizado con exito!</h2>
      <h3 className="checkout-items">Gracias por confiar en Sasha pasteles</h3>
      <h4 className="checkout-items">En breve le llegara un mail con los pasos a seguir </h4>
      <h4 className="checkout-items">El ID de su compra es: { orderID } </h4>
      <div className="btnseguir" >
        <Link to="/">
          <Button variant="info">
            Seguir Comprando
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
