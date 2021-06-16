import React from 'react';
import PropTypes from 'prop-types';

import { WHITE_TOAST_COLOR } from '@/constants/options';

import './styles.scss';

const CancelButton = ({ color, onClose, id }) => (
  <svg onClick={onClose(id)} className="cancelButton" fill={color}>
    <g>
      <title>Close</title>
      <rect height={4} width={20} rx="0.3em" transform="rotate(45 0 10)" />
      <rect height={2} width={20} rx="0.3em" transform="rotate(-45 20 5)" />
    </g>
  </svg>
);

CancelButton.propTypes = {
  color: PropTypes.string,
  onClose: PropTypes.func,
  id: PropTypes.string,
};

CancelButton.defaultProps = {
  color: WHITE_TOAST_COLOR,
  onClose: () => {},
  id: '1',
};

export default CancelButton;
