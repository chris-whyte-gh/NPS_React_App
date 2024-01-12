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
    if (selectedState) { //Is selectedState truthy. Only make a call if a state is selected (not null or empty)
      const apiKey = process.env.REACT_APP_NPS_API_KEY;
      console.log(apiKey);
      fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${selectedState}&api_key=${apiKey}`
      )
        .then((res) => res.json()) //Data returned in a Promise, then parsed to JSON object
        .then((data) => {
          console.log(data);
          setResult(data);
        });
    }
  }, [selectedState]); //Second argument in useEffect. An array of values, and when one of the values changes, useEffect is called

  return (
    <div className="dropdown">
      <h1>National Parks by State</h1>
      {/* Handle null state, where user goes back to select a state */}
      <label htmlFor="state">Select a state:</label>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">Select a state</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>

      {/* Result variable is initially set to null and is being accessed before fetch returns the data. Add a check to ensure result is not null and that it contains valid data. */}
      {result && result.data && result.data.length > 0 && (
        <div className="park-results">
          {result.data.map((park) => (
            <React.Fragment key={park.id}>
              <h3 key={park.id}>Park Name: {park.fullName}</h3>
              <section id="section">Description: {park.description}</section>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
