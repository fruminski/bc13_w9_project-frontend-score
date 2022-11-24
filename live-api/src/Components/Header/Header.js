import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <h1>Live API <span><img src="https://img.icons8.com/ios-filled/100/000000/engineering.png" alt=''/></span></h1>
      
      <p>
        A visual representation of your favourite APIs, along with their
        status...
      </p>
    </div>
  );
}

export default Header;
