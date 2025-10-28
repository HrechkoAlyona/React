import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';

function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
