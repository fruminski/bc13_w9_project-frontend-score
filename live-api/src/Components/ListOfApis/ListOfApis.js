import React from "react";
import ListElement from "../ListElement/ListElement";
import "./ListOfApis.css";

function ListOfApis(props) {
  return (
    <div className="list-container">
      <ListElement />
      <ListElement />
    </div>
  );
}

export default ListOfApis;
