import React from "react";
import "./AddApi.css";

function AddApi() {
  return (
    <div className="add-api-container">
      <input
        type="text"
        className="input"
        placeholder="paste in your API url"
      ></input>
      <button>Add An API</button>
    </div>
  );
}

export default AddApi;
