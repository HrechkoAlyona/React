import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import "./Text.css";


const Text = () => {
  const { language } = useContext(LanguageContext);

  return (
    <h1 style={{ color: "violet" }}>
      {language === "en"
        ? "English language was chosen"
        : "Был выбран русский язык"}
    </h1>
  );
};

export default Text;
