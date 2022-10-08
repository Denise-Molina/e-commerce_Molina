import React, {useContext} from "react";
import ItemCount from "../components/ItemCount";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {cartContext} from "./cartContext"

const ItemDetail = ({ title, price, img, detail }) => {
  //para aparecer el contador se debe cambiar el true por el false
  let estadoCart = false;

const {addItem} = useContext(cartContext)

  const onAddToCart = (count) => {
    addItem(title, price, img, detail, count);
    /*alert(`agregaste al carrito ${quantity} productos!!`);*/
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

        {estadoCart === false ? (
          <ItemCount initial={1} stock={10} onAddToCart={onAddToCart} />
        ) : (
          <Link to="/Cart/">
            <Button variant="outline-dark">Finalizar Compra</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
