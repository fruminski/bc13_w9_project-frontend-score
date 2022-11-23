import React from "react";
import "./AddApi.css";

function AddApi(props) {
  return (
    <div className="add-api-container">
      <form>
        <label for={props.APIname}>{props.InputName}</label>
        <input
          type="text"
          className="input"
          placeholder={props.Placeholder}
          onChange={props.handleChange}
        ></input>
      </form>
    </div>
  );
}

export default AddApi;
