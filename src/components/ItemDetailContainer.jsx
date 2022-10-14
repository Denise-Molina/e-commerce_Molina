import { getSingleItems } from "../firestore";
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  const { itemId } = useParams();
  useEffect(() => {
    getSingleItems(itemId).then((nuevosDatos) => setData(nuevosDatos));
  }, [itemId]);

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
