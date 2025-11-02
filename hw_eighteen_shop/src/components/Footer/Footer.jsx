import styles from "./Footer.module.css";
import instagramm from "../../assets/instagramm.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";

export const Footer = () => {
  return (
    <footer className={`container ${styles.footerWrapper}`}>
      <div>
        <h3 className={styles.footerTitle}>Контакты</h3>
        <p className={styles.footerText}>8 800 000 00 00</p>
        <p className={styles.footerText}>emailexample@email.com</p>
        <p
          style={{ marginTop: 93, fontSize: "1.2em" }}
          className={styles.footerText}
        >
          2024 Сникер-магазин. Все права защищены
        </p>
      </div>

      <div className={styles.footerRight}>
        <div className={styles.footerSocials}>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagramm} alt="instagramm" />
        </div>

        <input
          className={styles.footerEmailInput}
          type="text"
          placeholder="Введите свой email"
        />
      </div>
    </footer>
  );
};
