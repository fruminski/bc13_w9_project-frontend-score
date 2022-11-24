import React from "react";
import "./Button.css";

function AddButton(props) {
  return (
    <div>
      <button className={props.className} onClick={props.handleClick}>
        ADD API
      </button>
    </div>
  );
}
export default AddButton;
