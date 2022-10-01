import React, { useState, useEffect } from "react";
import Item from "./Item";
//import ItemCount from  "./ItemCount";
import getItems  from "../data";
//import { useParams } from "react-router-dom";
//import {getItemsByCategory} from "../data";

function ItemListContainer() {
  let [data, setData] = useState([]);
  //const {cat} = useParams();

  useEffect(() => {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div className="main container">
        {data.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              detail={item.detail}></Item>
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
