import React, { useState, useEffect } from "react";

  /* Result variable is initially set to null and is being accessed before fetch returns the data. 
      Add a check to ensure result is not null (has a data property) and its > 0. 
      If result = null, return undefined and stop here
      If result has a data property which is null/undefined, or the length = 0, do same as above
      If any of these are false, stop expression. If true (result contains at least 1 park), display park results
      */

const Results = ({selectedState}) => {
    const [result, setResult ] = useState(null);

 // useEffect Hook makes the API Call and triggers an effect when the selectedState changes. The effect is a function that makes the API call and sets the result state variable with the response.
  useEffect(() => {
    if (selectedState) {
      //Is selectedState truthy. Only make a call if a state is selected (not null or empty)
      const apiKey = process.env.REACT_APP_NPS_API_KEY;
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


  return (
    <>
      {result?.data?.length > 0 && (
        <div className="park-results">
          {result.data.map((park) => (
            <React.Fragment key={park.id}>
              <h3 className="margin" key={park.id}>
                Park Name:{" "}
                <button
                  className="park-link"
                  onClick={() => window.open(park.url)}
                >
                  {/* <a href={park.url} target="_blank" rel="noopener noreferrer"> */}
                  {park.fullName}
                </button>
                {/* </a> */}
              </h3>
              {/* Only show park.designation if it has a truthy value */}
              {park.designation && (
                <p className="park-type margin">{park.designation}</p>
              )}
              <section id="section">Description: {park.description}</section>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default Results;
