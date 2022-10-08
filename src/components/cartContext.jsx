import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(data, price) {
    let newCart = cart.map((data) => data);
    newCart.push({ data, price });
    setCart(newCart);
    console.log(newCart);
  }

  /*
    function addItem(item, price) {
        if (isInCart(item.id)) {
          let newCart = cart.map((itemMapeo) => {
            if (itemMapeo.id === item.id) {
              itemMapeo.price += price;
              return itemMapeo;
            } else return itemMapeo;
          });
    
          setCart(newCart);
        } else {
          let newCart = cart.map((item) => item);
          newCart.push({ ...item, count: count });
          setCart(newCart);
        }
      }

      function getTotalItemsInCart() {
        let total = 5;
        cart.forEach((item) => 0);
        return total;
      }
    
      function isInCart(id) {
        let found = cart.some((item) => item.id === id);
        return found;
      }
  */

  return (
    <cartContext.Provider value={{ cart, addItem }}>
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
