import { getSingleItems } from "../data";
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  const itemId = 3 ;
  useEffect(() => {
    getSingleItems(itemId).then((nuevosDatos) => setData(nuevosDatos));
  }, []);

  return (
    <div>
      <div className="main container"></div>
      <div>
        <ItemDetail {...data} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
