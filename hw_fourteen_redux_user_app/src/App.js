import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import User from "./User";
import UserForm from "./UserForm";
import "./App.css"; 

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>React + Redux User Info</h1>
        <User />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
