import React from "react";
import "./../styles/Header.css";
import spotifyLogo from "./../assets/spotify.svg";

function Header() {
  return (
    <header className="header">
      <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" />
    </header>
  );
}

export default Header;
