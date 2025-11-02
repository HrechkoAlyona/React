import axios from "axios";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    const response = await axios.get(
      "https://68ef6dceb06cc802829d5c10.mockapi.io/basket"
    );
    setCartItems(response.data);
  };

  const addToCart = async (product) => {
    await axios.post(
      "https://68ef6dceb06cc802829d5c10.mockapi.io/basket",
      product
    );
    fetchCartItems();
  };

  const deleteFromCart = async (productId) => {
    await axios.delete(
      `https://68ef6dceb06cc802829d5c10.mockapi.io/basket/${productId}`
    );
    setCartItems((prev) => prev.filter((p) => p.id !== productId));
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ addToCart, deleteFromCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
