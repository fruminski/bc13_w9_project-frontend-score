import React from "react";
import "./AddApi.css";

function AddApi(props) {
  return (
    <div className="add-api-container">
      <form>
        <div className="label-container">
          <label for={props.APIname}>{props.InputName}</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder={props.Placeholder}
            onChange={props.handleChange}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default AddApi;
