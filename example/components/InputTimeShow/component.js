import React from "react";

const InputTimeShow = ({ timeShowToast, setTimeShowToast }) => {
  const handleTimeShowToast = (e) => {
    setTimeShowToast(e.target.value);
  };

  return (
    <React.Fragment>
      <label
        htmlFor="InputTimeShow"
        className="form-label text-white"
      >
        Time show
      </label>
      <input
        type="text"
        value={timeShowToast}
        onChange={handleTimeShowToast}
        className="form-control"
        id="InputTimeShow"
      />
    </React.Fragment>
  );
};

export default InputTimeShow;
