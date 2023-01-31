import React from "react";
import Header from "../Header/Header";
import ListOfApis from "../ListOfApis/ListOfApis";
import { useEffect, useState } from "react";
import useInterval from "use-interval";
import "./App.css";
import AddApi from "../AddApi/AddApi";
import AddButton from "../Button/Button";

function App() {
  /* The array of api objects */
  const [apiArray, setApiArray] = useState([]);
  /* The variable on which a refresh is triggered.  Count might be more symantically called "refresh" */
  let [count, setCount] = React.useState(0);
  /* A new api object for propagating before we push it into apiArray */
  const [newApi, setNewApi] = useState({});
  /* These next three are state variables which are updated whenever their respective input field is changed.
   * "Tags" is missing because it hasn't been implemented yet
   */
  const [url, setUrl] = useState("");
  const [apiName, setApiName] = useState("");
  const [docsLink, setDocsLink] = useState("");
  /* A variable to trigger the removal of an API entry.  Del would be set to the id of the entry in question */
  const [del, setDel] = useState("");

  useInterval(() => {
    /* This code block is executed periodically to refresh the page by manipulating "count" on which the next
     * useEffect block is dependant */
    setCount(count + 1);
  }, 300000); // passing null instead of 1000 will cancel the interval if it is already running

  useEffect(() => {
    /* If we're in this block of code then either it's time to update the page because the time period elapsed
     * or something was added or deleted from the list
     */
    async function getData() {
      const response = await fetch(
        "https://api-live-backend.onrender.com/api/"
      );
      const data = await response.json();
      setApiArray(data.payload);
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
        const response = await fetch(
          "https://api-live-backend.onrender.com/api/",
          {
            method: "POST",
            body: newApiJson,
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }
      postData();
      setCount(count + 1);
    }
  }, [newApi]);

  /* This code block gets executed whenever the del state variable changes.  This would happen if the ListOfApis component triggers
   * the appropriate handleDelete function which is passed in as a member method of props
   */
  useEffect(() => {
    async function deleteApi() {
      console.log("id:", del);
      const response = await fetch(
        `https://api-live-backend.onrender.com/${del}`,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    deleteApi();
    setCount(count + 1);
  }, [del]);

  /* Perhaps we could do away with all these functions and call the state handlers directly? */
  function handleDelete(id) {
    setDel(id);
    console.log(id);
  }

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
            <AddButton className="button" handleClick={handleClick} />
          </div>
        </div>

        <ListOfApis
          apiArray={apiArray}
          handleDelete={handleDelete}
        ></ListOfApis>
      </div>
    </div>
  );
}

export default App;
