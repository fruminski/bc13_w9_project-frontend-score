import React from "react";
import "./ListElementTEST.css";

function ListElement(props) {
  const Collapse = ({ collapsed, children }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(!collapsed);

    return (
      <>
        <button
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show" : "Hide"} {props.apiName}
        </button>
        <div
          className={`collapse-content ${
            isCollapsed ? "collapsed" : "expanded"
          }`}
          aria-expanded={isCollapsed}
        >
          {children}
        </div>
      </>
    );
  };

  return (
    <div className="list-element-container">
      <div className="left-container">
        <Collapse>
          <a href={props.apiUrl}>
            <p>{props.apiUrl}</p>
          </a>
          <div>{props.jsonExample}</div>
          <a href={props.docsUrl}>
            <button>Link to documentation</button>
          </a>
        </Collapse>
      </div>
      <div className="icons-container">
        <div className="ping"></div>
        <p>PING</p>
        <div className="get"></div>
        <p>GET</p>
        <div className="status"></div>
        <p>200</p>
      </div>
    </div>
  );
}

export default ListElement;
