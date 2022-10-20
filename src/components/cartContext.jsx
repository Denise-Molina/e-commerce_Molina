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

  //Elimina un item especifico del cart
  const removeItem = (id) => {
    return setCart(cart.filter((item) => item.id !== id));
  };

  //Elimina todos los items del cart
  const emptyCart = () => {
    return setCart([]);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        getTotalItemsInCart,
        getTotal,
        removeItem,
        emptyCart,
      }}>
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
