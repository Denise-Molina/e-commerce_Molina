import React from "react";
import ItemCount from "../components/ItemCount";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ title, price, img, detail }) => {
  const onAdd = (quantity) => {
    console.log(quantity);
  };

  return (
    <div className="card">
      <div className="card-img">
        <div></div>
      </div>
      <div className="card-detail">
        <h3> {title} </h3>
        <p> {detail} </p>
        <h4> $ {price} </h4>

        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <Button variant="outline-dark">Comprar</Button>
      </div>
    </div>
  );
};

export default ItemDetail;
