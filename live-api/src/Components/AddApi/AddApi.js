import React from "react";
import "./AddApi.css";

function AddApi(props) {
  return (
    <div className="add-api-container">
      <label for={props.APIname}>{props.InputName}</label>
      <input
        type="text"
        className="input"
        placeholder={props.Placeholder}
      ></input>
    </div>
  );
}

export default AddApi;
