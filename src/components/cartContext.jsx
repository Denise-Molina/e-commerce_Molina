import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(producto) {
    if (!isInCart(producto.id)) {
      setCart([...cart, producto]);
    }
  }

  function isInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
  }

  function getTotalItemsInCart() {
    return cart.reduce((acc, item) => (acc += item.count), 0);
  }

  const getTotal = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.count * prod.price;
    });

    return total;
  };

  return (
    <cartContext.Provider
      value={{ cart, addItem, isInCart, getTotalItemsInCart, getTotal }}>
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
