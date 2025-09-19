import React from "react";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext";
import Text from "./components/Text/Text";
import SwitchButton from "./components/SwitchButton/SwitchButton";
import "./App.css";


function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Text />
        <SwitchButton />
      </div>
    </LanguageProvider>
  );
}

export default App;

