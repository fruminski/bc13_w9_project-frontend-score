import React from "react";
import Header from "../Header/Header";
import ListOfApis from "../ListOfApis/ListOfApis";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ListOfApis />
    </div>
  );
}

export default App;
