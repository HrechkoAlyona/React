import axios from "axios";
import { useEffect, useState } from "react";
import banner from "../../assets/Banner.png";
import styles from "./HomePage.module.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/useCart";

export const HomePage = () => {
  const [products, setProducts] = useState(null);
  const { cartItems } = useCart();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://68ef6dceb06cc802829d5c10.mockapi.io/productData"
      );
      setProducts(response.data);
    } catch (error) {
      console.log("Ошибка при получении товаров", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className={`container ${styles.homeWrapper}`}>
      <img style={{ margin: "0 auto" }} src={banner} alt="" />

      <h2>Товары</h2>
      <div style={{ width: "100%", borderBottom: "1px solid lightgrey" }}></div>
      <div className={styles.products}>
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h1>Загрузка...</h1>
        )}
      </div>
    </div>
  );
};
