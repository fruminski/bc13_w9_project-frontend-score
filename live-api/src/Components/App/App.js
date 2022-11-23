import React from "react";
import Header from "../Header/Header";
import ListOfApis from "../ListOfApis/ListOfApis";
import { useEffect, useState } from "react";
import "./App.css";
import AddApi from "../AddApi/AddApi";
// import ListElement from "../ListElement/ListElement";
import ListElementTEST from "../ListElement/ListElementTEST";

function App() {
  const [apiName, setApiName] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const [jsonExample, setJsonExample] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3001/api/");
      const data = await response.json();
      let newData = JSON.stringify(data.payload[0], null, 2);
      console.log(newData);
      setApiName(data.payload[0].api_name);
      setApiUrl(data.payload[0].api_url);
      setJsonExample(newData);
    }
    getData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <AddApi />
      <ListOfApis>
        <ListElementTEST
          apiName={apiName}
          apiUrl={apiUrl}
          jsonExample=<pre>{jsonExample}</pre>
        />
        <ListElementTEST
          apiName={apiName}
          apiUrl={apiUrl}
          jsonExample=<pre>{jsonExample}</pre>
        />

        {/* <ListElement
          apiName={apiName}
          apiUrl={apiUrl}
          jsonExample={jsonExample}
        />
        <ListElement
          apiName={apiName}
          apiUrl={apiUrl}
          // jsonExample={jsonExample}
        /> */}
      </ListOfApis>
    </div>
  );
}

export default App;
