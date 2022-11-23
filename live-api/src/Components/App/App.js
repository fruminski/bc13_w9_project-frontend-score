import React from "react";
import Header from "../Header/Header";
import ListOfApis from "../ListOfApis/ListOfApis";
import { useEffect } from "react";
import "./App.css";
import AddApi from "../AddApi/AddApi";
import AddButton from "../Button/Button"

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
      <AddButton />
      <AddApi InputName="URL link" Placeholder="Enter your URL link here"/>
      <AddApi APIname="API name" InputName="API name" Placeholder="Enter your API name here"/>
      <AddApi APIname="Link to the docs" InputName="Docs link" Placeholder="Enter the link to the Docs here"/>
      <AddApi InputName="Tags" Placeholder="Enter the tags here"/>
      <ListOfApis />
    </div>
  );
}

export default App;
