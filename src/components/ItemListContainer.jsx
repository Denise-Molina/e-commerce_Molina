import React from "react";
import Card from "./Card";

function products(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <div className="main container">
        <Card
          price={590}
          title="Croissant de Almendras"
          detail="Croissant clásica francesa, rellena de pasta del Almendras."
          img="https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Large/1617223644_8f95399b5b1407fad2681f0f7a155af8.156475.jpeg"
        />
        <Card
          price={540}
          title="Pañuelitos de pastelera"
          detail="Pañuelitos de hojaldre, rellenos de pastelera y fruta. "
          img="https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Large/1584565859_1e9f42dabe70ae51fc35967f493959d5.156475.jpeg"
        />
        <Card
          price={990}
          title="Torta Matilda"
          detail="Torta de chocolate amargo relleno de ganache de chocolate"
          img="https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Large/1617226252_4220a031894d636a52c8025a4a501674.156475.jpeg"
        />
      </div>
    </div>
  );
}

export default products;
