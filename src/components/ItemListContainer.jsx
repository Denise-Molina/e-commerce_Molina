import React, { useState, useEffect } from "react";
import Item from "./Item";
//import ItemCount from  "./ItemCount";
import getItems from "../data";
import { useParams } from "react-router-dom";
import { getItemsByCategory } from "../data";

function ItemListContainer() {
  let [data, setData] = useState([]);
  const { cat } = useParams();
  /*
  useEffect(() => {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
  }, []);
*/
//codigo de prueba
  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

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
