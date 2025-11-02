import { useCart } from "../../context/useCart";
import cartImage from "../../assets/trash.svg";
import styles from "./CartCard.module.css";

export const CartCard = ({ product }) => {
  const { deleteFromCart } = useCart();

  return (
    <div className={styles.cartItemRow}>
      <img className={styles.cartItemImg} src={product.image} alt="Товар" />

      <div className={styles.cartItemDivider}></div>

      <div className={styles.cartItemTitle}>
        <p>{product.name}</p>
      </div>

      <p>
        <span>цена:</span>
        <br />
        <strong>{product.price}€</strong>
      </p>

      <button
        className={styles.cartItemBtn}
        onClick={() => deleteFromCart(product.id)}
      >
        <img src={cartImage} alt="" />
      </button>
    </div>
  );
};
