import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import StateDropdown from "./StateDropdown";
import Clear from "./Clear/Clear";
import Results from "./Results";

// To Do
// Create a component for the dropdown
// Create a component for the park results

//Define a state variable to manage the selected state
const App = () => {
  const [selectedState, setSelectedState] = useState("");
  const [results, setResults] = useState(null);
  //set state of component with result data. We use null because it holds the response of the API call, and it may not be available. Component checks for response before rendering data. If we knew there would always be data, we could use an empty array.

  const clearResults = () => {
    setSelectedState("");
    setResults(null);
  };

  return (
    <div className="app-container">
      <Header heading="National Parks by State" />
      <div className="dropdown-container">
        {/* Handle null state, where user goes back to select a state */}
        <StateDropdown
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
        <Clear clearResults={clearResults} />
      </div>
      <Results
        selectedState={selectedState}
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
