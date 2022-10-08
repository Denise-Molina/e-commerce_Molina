import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(data, count) {
    const newItem = {
      ...data,
      count,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((product) => product.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const copyArray = [...cart];
      copyArray[productIndex].count += count;
      setCart(copyArray);
    } else {
      setCart([...cart, newItem]);
    }
  }

  function isInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
  }

  function getTotalItemsInCart() {
    return cart.reduce((acc, item) => (acc += item.count), 0);
  }

  return (
    <cartContext.Provider
      value={{ cart, addItem, isInCart, getTotalItemsInCart }}>
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
