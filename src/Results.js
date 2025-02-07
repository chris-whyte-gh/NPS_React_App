import React, { useState, useEffect } from "react";

/* Result variable is initially set to null and is being accessed before fetch returns the data. 
      Add a check to ensure result is not null (has a data property) and is > 0. 
      If result = null, return undefined and stop here
      If result has a data property which is null/undefined, or the length = 0, do same as above
      If any of these are false, stop expression. If true (result contains at least 1 park), display park results
      */

const Results = ({ selectedState, results, setResults }) => {
  useEffect(() => {
    if (selectedState) {
      //Is selectedState truthy. Only make a call if a state is selected (not null or empty)
      const apiKey = process.env.REACT_APP_NPS_API_KEY;
      fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${selectedState}&api_key=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setResults(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setResults(null);
    }
  }, [selectedState, setResults]); //Second argument in useEffect. An array of values, and when one of the values changes, useEffect is called

  return (
    <>
      {results?.data?.length > 0 && (
        <div className="park-results">
          {results.data.map((park) => (
            <React.Fragment key={park.id}>
              <h3 className="margin" key={park.id}>
                Park Name:{" "}
                <button
                  className="park-link"
                  onClick={() => window.open(park.url)}
                >
                  {park.fullName}
                </button>
              </h3>
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
