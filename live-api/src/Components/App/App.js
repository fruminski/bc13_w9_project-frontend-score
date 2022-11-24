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
    /* If the add button was clicked we're here*/

    // AND if there was data in the input fields */
    if (JSON.stringify(newApi) !== "{}") {
      async function postData() {
        const newApiJson = JSON.stringify(newApi);
        console.log(newApiJson);
        /* we post to the API with the data in the fields */
        const response = await fetch("http://localhost:3001/api/", {
          method: "POST",
          body: newApiJson,
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        });
        // const data = await response.json();

        //    console.log("useEffect() payload: ",data.payload);
        //   const newApiArray = [...apiArray, data.payload];
        //   setApiArray(newApiArray);
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
    console.log("handleClick(): ", url, apiName, docsLink);
    setNewApi({ api_url: url, api_name: apiName, doclink: docsLink });
  }

  console.log(newApi);
  return (
    <div className="app-container">
      <Header />
      <div className="add-and-list-container">
        <div className="add-container">
          <div className="inputs-container">
            <AddApi
              InputName="URL"
              Placeholder="Enter your URL link here"
              handleChange={handleChangeUrl}
            />
            <AddApi
              APIname="API name"
              InputName="API"
              Placeholder="Enter your API name here"
              handleChange={handleChangeName}
            />
            <AddApi
              APIname="Link to the docs"
              InputName="DOC"
              Placeholder="Enter the link to the Docs here"
              handleChange={handleChangeDocs}
            />
            <AddApi InputName="TAG" Placeholder="Enter the tags here" />
          </div>

          <div className="add-button-container">
            <AddButton handleClick={handleClick} />
          </div>
        </div>

        <ListOfApis apiArray={apiArray}></ListOfApis>
      </div>
    </div>
  );
}

export default App;
