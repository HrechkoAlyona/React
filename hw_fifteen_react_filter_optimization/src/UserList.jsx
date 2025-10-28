import React from "react";

// 5. Мемоизация компонента UserList
const UserList = React.memo(({ users }) => {
  console.log("Рендер UserList"); // для проверки оптимизации

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.length > 0 ? (
        users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              fontSize: "18px",
            }}
          >
            {user.name}
          </li>
        ))
      ) : (
        <p>Пользователи не найдены</p>
      )}
    </ul>
  );
});

export default UserList;
