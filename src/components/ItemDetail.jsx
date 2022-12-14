import React, { useContext, useState } from "react";
import ItemCount from "../components/ItemCount";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { cartContext } from "./cartContext";

const ItemDetail = ({ id, title, price, img, detail }) => {
  const [estadoCart, setEstadoCart] = useState();
  const { addItem } = useContext(cartContext);

  const onAddToCart = (count) => {
    addItem({ id, title, price, img, detail, count });
    setEstadoCart(count);
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
            <Button variant="outline-dark">Ver detalle de compra</Button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={10} onAddToCart={onAddToCart} />
        )}
      </div>
      <div>
        <Link to="/">
          <button className="btn_seguir">Seguir comprando</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
