import React from "react";
import "./Button.css";

function AddButton(props) {
  return (
    <div>
      <button className="button" onClick={props.handleClick}>
        Add An API
      </button>
    </div>
  );
}
export default AddButton;
