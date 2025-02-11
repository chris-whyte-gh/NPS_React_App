import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import StateDropdown from "../StateDropdown/StateDropdown";
import Clear from "../Clear/Clear";
import Results from "../Results/Results";

//Define a state variable to manage the selected state
const App = () => {
  const [selectedNpsState, setSelectedNpsState] = useState("");
  const [results, setResults] = useState(null);
  //set state of component with result data. We use null because it holds the response of the API call, and it may not be available. Component checks for response before rendering data. If we knew there would always be data, we could use an empty array.

  return (
    <div className="app-container">
      <div className="header-container">
        <Header heading="National Parks by State" />
        <div className="dropdown-container">
          <StateDropdown
            selectedState={selectedNpsState}
            setSelectedState={setSelectedNpsState}
          />
          <Clear
            setSelectedNpsState={setSelectedNpsState}
            setResults={setResults}
          />
        </div>
      </div>
      <Results
        selectedState={selectedNpsState}
        results={results}
        setResults={setResults}
      />
      <Footer
        title="National Park Service"
        department="U.S. Department of the Interior"
      />
    </div>
  );
};

export default App;
