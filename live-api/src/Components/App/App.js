import React from "react";
import Header from "../Header/Header";
import ListOfApis from "../ListOfApis/ListOfApis";
import { useEffect } from "react";
import "./App.css";
import AddApi from "../AddApi/AddApi";

function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3001/api/");
      const data = await response.json();
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <AddApi />
      <ListOfApis />
    </div>
  );
}

export default App;
