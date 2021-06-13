import React from 'react';
import PropTypes from 'prop-types';

import { WHITE } from '@/constants/options';

import './styles.css';

const CancelButton = ({ color, closeToast, id }) => (
  <svg onClick={closeToast(id)} className="cancelButton" fill={color}>
    <g>
      <title>Close</title>
      <rect height={4} width={20} rx="0.3em" transform="rotate(45 0 10)" />
      <rect height={2} width={20} rx="0.3em" transform="rotate(-45 20 5)" />
    </g>
  </svg>
);

CancelButton.propTypes = {
  color: PropTypes.string,
};

CancelButton.defaultProps = {
  color: WHITE,
};

export default CancelButton;
