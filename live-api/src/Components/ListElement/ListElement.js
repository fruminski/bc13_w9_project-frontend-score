import React from "react";
import "./ListElement.css";

function ListElement() {
  return (
    <div className="list-element-container">
      <div className="one-liner-container">
        <p>API name</p>
        <p>Brief description</p>
        <p>JSON example</p>
        <a href="https://www.google.com/">
          <p>Link to docs</p>
        </a>
      </div>
      <div className="icons-container">
        <div className="ping"></div>
        <p>PING</p>
        <div className="get"></div>
        <p>GET</p>
        <div className="status"></div>
        <p>200</p>
      </div>
    </div>
  );
}

export default ListElement;
