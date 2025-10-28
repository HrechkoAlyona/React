import React, { useState, useCallback, useMemo } from "react";
import UserList from "./UserList";

const App = () => {
  // Мемоизируем список пользователей
  const userList = useMemo(
    () => [
      { id: 1, name: "Alice Johnson" },
      { id: 2, name: "Bob Smith" },
      { id: 3, name: "Charlie Brown" },
      { id: 4, name: "Diana Prince" },
      { id: 5, name: "Ethan Hunt" },
    ],
    []
  );

  const [filter, setFilter] = useState("");

  // useCallback зависит от мемоизированного списка
  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [userList]
  );

  // useMemo для мемоизации результата фильтрации
  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Оптимизация списка фильтрации</h1>

      <input
        type="text"
        value={filter}
        placeholder="Введите имя для фильтрации..."
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      />

      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
