import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Item(props) {
  let { id, price, title, img, detail } = props;

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{detail}</p>
        <h4>$ {price}</h4>
      </div>

      <Link to={`/detalle/${id}`}>
        <Button className="btninicio" variant="outline-dark">
          Ver detalle del producto
        </Button>
      </Link>

    </div>
  );
}

export default Item;

