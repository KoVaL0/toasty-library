import React from 'react';

const ColorPicker = ({ colorToast, setColorToast }) => {
  const handleColorToast = (e) => {
    setColorToast(e.target.value);
  };

  return (
    <div className="position-absolute" style={{ right: '25%' }}>
      <label htmlFor="ColorPicker" className="form-label text-white">
        Color picker
      </label>
      <input
        type="color"
        onChange={handleColorToast}
        value={colorToast}
        className="form-control form-control-color"
        id="ColorPicker"
      />
    </div>
  );
};

export default ColorPicker;
