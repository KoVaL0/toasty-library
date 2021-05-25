import React from 'react';
import PropTypes from 'prop-types';

export function ButtonCancel({ color }) {
  return (
    <svg className={`buttonCancel ${color}`} xmlns="http://www.w3.org/2000/svg" fill={color}>
      <g>
        <title>Close</title>
        <rect height={4} width={20} rx="0.3em" transform="rotate(45 0 10)" />
        <rect height={2} width={20} rx="0.3em" transform="rotate(-45 20 5)" />
      </g>
    </svg>
  );
}

ButtonCancel.propTypes = {
  color: PropTypes.string,
};

ButtonCancel.defaultProps = {
  color: '#ffffff',
};
