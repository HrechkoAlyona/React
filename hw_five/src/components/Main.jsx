import React from "react";
import "./../styles/Main.css";
import AuthButtons from "./AuthButtons";

function Main() {
  return (
    <main className="main">
      <h1 className="title">LIFE IS WASTED ON THE LIVING</h1>
      <div className="signin-text">
        <p className="signin">Sign in</p>
        <p className="with">with</p>
      </div>
      <AuthButtons />
    </main>
  );
}

export default Main;
