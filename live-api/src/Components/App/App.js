import React from "react";
import Header from "../Header/Header";
import ListOfApis from "../ListOfApis/ListOfApis";
import "./App.css";
import AddApi from "../AddApi/AddApi";

function App() {
  return (
    <div className="app-container">
      <Header />
      <AddApi />
      <ListOfApis />
    </div>
  );
}

export default App;
