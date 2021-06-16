import React from "react";

const SelectToastPosition = ({ positionToast, setPositionToast }) => {
  const handleSelectPositionToast = (e) => {
    setPositionToast(e.target.value);
  };

  return (
    <React.Fragment>
      <label htmlFor="SelectToastPosition" className="form-label text-white">
        Position
      </label>
      <select
        className="form-select"
        id="SelectToastPosition"
        onChange={handleSelectPositionToast}
        value={positionToast}
        aria-label="Select position"
      >
        <option value="bottomRight">bottomRight</option>
        <option value="bottomLeft">bottomLeft</option>
        <option value="topRight">topRight</option>
        <option value="topLeft">topLeft</option>
      </select>
    </React.Fragment>
  );
};

export default SelectToastPosition;
