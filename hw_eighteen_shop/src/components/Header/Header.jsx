import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  const navData = [
    { name: "Главная", path: "/" },
    { name: "Корзина", path: "/cart" },
    { name: "Контакты", path: "/contacts" },
  ];
  return (
    <header className={`container ${styles.header}`}>
      <h3 style={{ color: "white" }}>Sneakers shop</h3>

      <nav className={styles.navBar}>
        {navData.map((el) => (
          <NavLink
            key={el.path}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#FFFFFF80",
            })}
            to={el.path}
          >
            {el.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
