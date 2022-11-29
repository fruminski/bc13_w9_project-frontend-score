import "./ListOfApis.css";
import ListElementTEST from "../ListElement/ListElementTEST";

/* ListOfApis takes props.apiArray and calls ListElement on each (object) entry to build the list
 */
function ListOfApis(props) {
  return (
    <div className="list-container">
      {props.apiArray.map((element) => {
        return (
          <ListElementTEST
            id={element.api_id}
            apiName={element.api_name}
            apiUrl={element.api_url}
            jsonExample={element.json} // jsonExample=<pre>{JSON.stringify(element, null, 2)}</pre>
            docsUrl={element.doclink}
            response_code={element.response_code}
            get={element.get}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </div>
  );
}

export default ListOfApis;
