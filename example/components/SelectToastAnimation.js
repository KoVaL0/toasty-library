import React from "react";

const SelectToastAnimation = ({ animationToast, setAnimationToast }) => {
  const handleSelectToastAnimation = (e) => {
    setAnimationToast(e.target.value);
  };

  return (
    <React.Fragment>
      <label htmlFor="SelectToastAnimation" className="form-label text-white">
        Animation
      </label>
      <select
        id="SelectToastAnimation"
        className="form-select"
        onChange={handleSelectToastAnimation}
        value={animationToast}
        aria-label="Select animation"
      >
        <option value="wave">Wave</option>
        <option value="emergence">Emergence</option>
      </select>
    </React.Fragment>
  );
};

export default SelectToastAnimation;
