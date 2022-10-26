import { createContext, useState } from "react";

import { databaseProducts } from "../services/database";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [ products, setProducts ] = useState(databaseProducts);

  return (
    <CartContext.Provider
      value={{
        products
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
