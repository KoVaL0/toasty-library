import React from "react";

const CheckBoxDefaultColor = ({
  showColorPicker,
  setColorToast,
  setShowColorPicker,
}) => {
  const handleCheckBoxDefaultColor = (e) => {
    setColorToast(null);
    setShowColorPicker((prev) => !prev);
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={!showColorPicker}
        id="CheckBoxDefaultColor"
        onChange={handleCheckBoxDefaultColor}
      />
      <label
        className="form-check-label text-white"
        htmlFor="CheckBoxDefaultColor"
      >
        Default color
      </label>
    </div>
  );
};

export default CheckBoxDefaultColor;
