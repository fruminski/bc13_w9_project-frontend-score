import React from "react";
import Header from "../Header/Header";
import ListOfApis from "../ListOfApis/ListOfApis";
import { useEffect, useState } from "react";
import useInterval from "use-interval";
import "./App.css";
import AddApi from "../AddApi/AddApi";
import AddButton from "../Button/Button";

function App() {
  const [apiArray, setApiArray] = useState([]);
  let [count, setCount] = React.useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 300000); // passing null instead of 1000 will cancel the interval if it is already running

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3001/api/");
      const data = await response.json();
      setApiArray(data.payload);

      // console.log(JSON.parse(apiArray[0].json));
    }
    getData();
  }, [count]);

  return (
    <div className="app-container">
      <Header />

      <AddButton />
      <AddApi InputName="URL link" Placeholder="Enter your URL link here" />
      <AddApi
        APIname="API name"
        InputName="API name"
        Placeholder="Enter your API name here"
      />
      <AddApi
        APIname="Link to the docs"
        InputName="Docs link"
        Placeholder="Enter the link to the Docs here"
      />
      <AddApi InputName="Tags" Placeholder="Enter the tags here" />
      <ListOfApis apiArray={apiArray}></ListOfApis>
    </div>
  );
}

export default App;
