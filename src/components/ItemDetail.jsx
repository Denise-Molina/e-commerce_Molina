import React, { useContext, useState } from "react";
import ItemCount from "../components/ItemCount";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { cartContext } from "./cartContext";

const ItemDetail = ({id, title, price, img, detail }) => {
  //para aparecer el contador se debe cambiar el true por el false

  const [estadoCart, setEstadoCart] = useState();
  const { addItem } = useContext(cartContext);

  const onAddToCart = (count) => {
    addItem({ id, title, price, img, detail, count });
    setEstadoCart(count);
    console.log(`Se agrego al carrito ${count} productos!!`);
  };

  return (
    <div className="card">
      <div className="card-img">
        <div> </div>
      </div>
      <div className="card-detail">
        <h3> {title} </h3>
        <p> {detail} </p>
        <h4> $ {price} </h4>

        {estadoCart ? (
          <Link to="/Cart/">
            <Button variant="outline-dark">Finalizar Compra</Button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={10} onAddToCart={onAddToCart} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
