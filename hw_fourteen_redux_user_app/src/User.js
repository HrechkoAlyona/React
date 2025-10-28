import React from "react";
import { connect } from "react-redux";

const User = ({ name, status }) => {
  return (
    <div style={styles.container}>
      <h2>Информация о пользователе</h2>
      <p><strong>Имя:</strong> {name}</p>
      <p><strong>Статус:</strong> {status}</p>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
  },
};

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
