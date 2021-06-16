import React from "react";

const SelectToastType = ({ typeToast, setTypeToast }) => {
  const handleSelectTypeToast = (e) => {
    setTypeToast(e.target.value);
  };

  return (
    <React.Fragment>
      <label htmlFor="SelectToastType" className="form-label text-white">
        Type
      </label>
      <select
        id="SelectToastType"
        className="form-select"
        onChange={handleSelectTypeToast}
        value={typeToast}
        aria-label="Select type"
      >
        <option value="error">Error</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="info">Info</option>
      </select>
    </React.Fragment>
  );
};

export default SelectToastType;
