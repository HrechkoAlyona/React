import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import "./Button.css";


const SwitchButton = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      style={{
        backgroundColor: "violet",
        color: "black",
        padding: "10px 20px",
        borderRadius: "12px",
        border: "2px solid blue",
        cursor: "pointer",
      }}
      onClick={toggleLanguage}
    >
      Switch language
    </button>
  );
};

export default SwitchButton;
