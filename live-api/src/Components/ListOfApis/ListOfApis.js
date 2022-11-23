import "./ListOfApis.css";
import ListElementTEST from "../ListElement/ListElementTEST";

function ListOfApis(props) {
  return (
    <div className="list-container">
      {props.apiArray.map((element) => {
        return (
          <ListElementTEST
            key={element.api_id}
            apiName={element.api_name}
            apiUrl={element.api_url}
            jsonExample=<pre>{JSON.stringify(element, null, 2)}</pre>
            docsUrl={element.doclink}
          />
        );
      })}
    </div>
  );
}

export default ListOfApis;
