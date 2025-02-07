import React from "react";
import "./Clear.css";

const Clear = ({ clearResults }) => {
  return <button className="clear-button" onClick={clearResults}>Clear</button>;
};

export default Clear;
