import React from "react";
import { useCart } from "../../context/useCart";

import styles from "./CartPage.module.css";
import { CartCard } from "../../components/CartCard/CartCard";

export const CartPage = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  const fullPrice = cartItems.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0);
  console.log(fullPrice);
  return (
    <div className={`container ${styles.cartSection}`}>
      <h2>Корзина</h2>
      <div style={{ width: "100%", borderBottom: "1px solid lightgray" }}></div>
      <div className={styles.cartLogic}>
        <div className={styles.cartCards}>
          {cartItems.length > 0 &&
            cartItems.map((product) => <CartCard product={product} />)}
        </div>
        <div className={styles.summ}>
          <h2>Итого</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <div
            style={{ width: "100%", borderBottom: "1px solid #00000080" }}
          ></div>
          <div>
            <span>ЦЕНА:</span>
            <br />
            <strong>{fullPrice}€</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
