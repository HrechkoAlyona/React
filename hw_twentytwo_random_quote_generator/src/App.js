import React from "react";
import "./App.css";  
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Random Quote Generator</h1>
        <Quote />
      </div>
    </div>
  );
}

export default App;
