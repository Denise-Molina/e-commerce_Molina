import React from "react";
import Button from "react-bootstrap/Button";
import ItemCount from "../components/ItemCount";
import {Link} from "react-router-dom";


function Item(props) {
  let { price, title, img, detail } = props;

  const onAdd = (quantity) => {
    console.log(quantity);
  };

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

      <Link to="/detalleProducto">
      <Button variant="outline-info" >Ver detalle del producto</Button>
      </Link>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <Button variant="outline-dark">Comprar</Button>
    </div>
  );
}

export default Item;

/*codigo de prueba
          <div className="card-img">
            <img src={img} alt="card img"></img>
          </div>
          <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>$ {price}</h4>
          </div>

*/

/*
        {data.map((item) => {
          return (
            <Card>
              key={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              detail={item.detail}
            </Card>
          );
        })}
        */
