//importing necessary modules
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import StateDropdown from "./StateDropdown";
import Results from "./Results";

// To Do
// Create a component for the dropdown
// Create a component for the park results

//Define a state variable to manage the selected state
const App = () => {
  const [selectedState, setSelectedState] = useState("");
  //set state of component with result data. We use null because it holds the response of the API call, and it may not be available. Component checks for response before rendering data. If we knew there would always be data, we could use an empty array.

  return (
    <div className="dropdown">
      <Header />
      {/* <h1>National Parks by State</h1> */}
      {/* Handle null state, where user goes back to select a state */}
      <StateDropdown
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
      <Results selectedState={selectedState} />
      <Footer />
    </div>
  );
};

export default App;
