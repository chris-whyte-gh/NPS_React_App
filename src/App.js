//importing necessary modules
import React, { useState, useEffect } from "react";
import "./App.css";

//Define a state variable to manage the selected state
const App = () => {
  const [selectedState, setSelectedState] = useState("");
  //set state of component with result data. We use null because it holds the response of the API call, and it may not be available. Component checks for response before rendering data. If we knew there would always be data, we could use an empty array.
  const [result, setResult] = useState(null);

  // useEffect Hook makes the API Call and triggers an effect when the selectedState changes. The effect is a function that makes the API call and sets the result state variable with the response.
  useEffect(() => {
    if (selectedState) {
      //Is selectedState truthy. Only make a call if a state is selected (not null or empty)
      const apiKey = process.env.REACT_APP_NPS_API_KEY;
      console.log(apiKey);
      fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${selectedState}&api_key=${apiKey}`
      )
        .then((res) => res.json()) //Data returned in a Promise, then parsed to JSON object
        .then((data) => {
          console.log(data);
          setResult(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedState]); //Second argument in useEffect. An array of values, and when one of the values changes, useEffect is called

  const stateOptions = [
    { value: "", label: "Select a state", disabled: true, hidden: true },
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  return (
    <div className="dropdown">
      <h1>National Parks by State</h1>
      {/* Handle null state, where user goes back to select a state */}
      <label htmlFor="state-dropdown">Select a state:</label>
      <select
        id="state-dropdown"
        name="state"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {stateOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            hidden={option.hidden}
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Result variable is initially set to null and is being accessed before fetch returns the data. 
      Add a check to ensure result is not null (has a data property) and its > 0. 
      If result = null, return undefined and stop here
      If result has a data property which is null/undefined, or the length = 0, do same as above
      If any of these are false, stop expression. If true (result contains at least 1 park), display park results
      */}
      {result?.data?.length > 0 && (
        <div className="park-results">
          {result.data.map((park) => (
            <React.Fragment key={park.id}>
              <h3 key={park.id}>
                Park Name:{" "}
                <a href={park.url} target="_blank" rel="noopener noreferrer">
                  {park.fullName}
                </a>
              </h3>
              <p id="park-type">{park.designation}</p>
              <section id="section">Description: {park.description}</section>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

// Next step, hide park designation if one isn't listed, see Delaware > Chesapeake Bay