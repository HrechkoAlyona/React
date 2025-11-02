import plusButton from "../../assets/plus-disabled.svg";
import { useCart } from "../../context/useCart";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <div>
        <p>
          <span>цена:</span>
          <br />
          {product.price} €
        </p>
        <button onClick={() => addToCart(product)}>
          <img src={plusButton} alt="add to card" />
        </button>
      </div>
    </div>
  );
};
