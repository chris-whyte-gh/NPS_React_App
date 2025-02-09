import "./StateDropdown.css";
import stateOptionsArray from "./StateOptions";

const StateDropdown = ({ setSelectedState, selectedState }) => {
  return (
    <>
      <label className="state-label" htmlFor="state-dropdown">
        Select a state:
      </label>
      <select
        id="state-dropdown"
        name="state"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {stateOptionsArray.map((option) => (
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
    </>
  );
};

export default StateDropdown;
