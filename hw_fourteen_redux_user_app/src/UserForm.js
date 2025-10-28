import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "./redux/actions";

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !status.trim()) {
      alert("Заполните все поля!");
      return;
    }
    setUserInfo({ name, status });
    setName("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>Изменить данные пользователя</h3>
      <input
        type="text"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Введите статус"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Сохранить</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    width: "250px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default connect(null, { setUserInfo })(UserForm);
