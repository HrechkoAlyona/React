import React from "react";
import "./../styles/AuthButtons.css";

import appleIcon from "./../assets/apple.svg";
import googleIcon from "./../assets/google.svg";
import xboxIcon from "./../assets/x-logo.svg";

function AuthButtons() {
  return (
    <div className="auth-buttons">
      <button className="auth-btn apple">
        <img src={appleIcon} alt="Apple" />
      </button>
      <button className="auth-btn google">
        <img src={googleIcon} alt="Google" />
      </button>
      <button className="auth-btn xbox">
        <img src={xboxIcon} alt="Xbox" />
      </button>
    </div>
  );
}

export default AuthButtons;
