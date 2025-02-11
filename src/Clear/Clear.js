import React from "react";
import PropTypes from "prop-types";
import "./Clear.css";

const Clear = ({ setSelectedNpsState, setResults }) => {
  const clearResults = () => {
    setSelectedNpsState("");
    setResults(null);
  };

  return (
    <button
      className="clear-button"
      onClick={clearResults}
      aria-label="Clear state selection and results"
    >
      Clear
    </button>
  );
};

Clear.propTypes = {
  setSelectedNpsState: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
};
export default Clear;
