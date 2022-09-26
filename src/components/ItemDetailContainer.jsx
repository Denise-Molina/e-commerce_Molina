import getSingleItems from "../data";
import React, { useEffect, useState } from "react";
import Item from "./Item";


function ItemDetailContainer() {
  let [data, setData] = useState({});
  useEffect(() => {
    getSingleItems().then((nuevosDatos) => setData(nuevosDatos));
  }, []);

  return (
    <div>
      <div className="main container"></div>
      <div>
        <Item>
          <h1>{data.title}</h1>
          <h2>{data.price}</h2>
          <p>{data.detail}</p>
        </Item>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
