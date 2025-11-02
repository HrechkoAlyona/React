import styles from "./Contacts.module.css";
import snapchatLogo from "../../assets/snap_chat.svg";
import facebookLogo from "../../assets/facebook-painted.svg";
import xLogo from "../../assets/x_icon.svg";

export const Contacts = () => {
  return (
    <section className={`container ${styles.page}`}>
      <h2>Контакты</h2>
      <div className={styles.hr}></div>

      <ul className={styles.list}>
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </ul>

      <div className={styles.layout}>
        <form className={styles.form}>
          <div className={styles.row}>
            <input type="email" placeholder="Ваш email" required />
            <input type="text" placeholder="Ваше имя" required />
          </div>
          <input
            style={{ height: "116px" }}
            type="text"
            placeholder="Ваше сообщение"
            required
          />
          <button type="submit">Отправить</button>
        </form>

        <div className={styles.socialCard}>
          <p>Найдите нас:</p>
          <div className={styles.socialIcons}>
            <a href="https://snapchat.com" target="_blank">
              <img src={snapchatLogo} alt="Snapchat" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://x.com" target="_blank">
              <img src={xLogo} alt="X" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
