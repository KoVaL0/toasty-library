import React from "react";

const InputToastContent = ({ contentToast, setContentToast }) => {
  const handleInputContent = (e) => {
    setContentToast(e.target.value);
  };

  return (
    <React.Fragment>
      <label htmlFor="InputToastContent" className="form-label text-white">
        Toast content
      </label>
      <input
        type="email"
        className="form-control"
        id="InputToastContent"
        onChange={handleInputContent}
        value={contentToast}
      />
    </React.Fragment>
  );
};

export default InputToastContent;
