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
  const [newApi, setNewApi] = useState({});
  const [url, setUrl] = useState("");
  const [apiName, setApiName] = useState("");
  const [docsLink, setDocsLink] = useState("");

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

  useEffect(() => {
    if (JSON.stringify(newApi) !== "{}") {
      async function postData() {
        const response = await fetch("http://localhost:3001/api/", {
          method: "POST",
          body: JSON.stringify(newApi)
        });
        const data = await response.json();

        console.log(data.payload);
        const newApiArray = [...apiArray, data.payload];
        setApiArray(newApiArray);
      }
      postData();
    }
  }, [newApi]);

  function handleChangeUrl(e) {
    setUrl(e.target.value);
  }

  function handleChangeName(e) {
    setApiName(e.target.value);
  }

  function handleChangeDocs(e) {
    setDocsLink(e.target.value);
  }

  function handleClick() {
    setNewApi({ api_url: url, api_name: apiName, doclink: docsLink });
  }

  console.log(newApi);
  return (
    <div className="app-container">
      <Header />

      <AddButton handleClick={handleClick} />
      <AddApi
        InputName="URL link"
        Placeholder="Enter your URL link here"
        handleChange={handleChangeUrl}
      />
      <AddApi
        APIname="API name"
        InputName="API name"
        Placeholder="Enter your API name here"
        handleChange={handleChangeName}
      />
      <AddApi
        APIname="Link to the docs"
        InputName="Docs link"
        Placeholder="Enter the link to the Docs here"
        handleChange={handleChangeDocs}
      />
      <AddApi InputName="Tags" Placeholder="Enter the tags here" />
      <ListOfApis apiArray={apiArray}></ListOfApis>
    </div>
  );
}

export default App;
