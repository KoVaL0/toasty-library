import React from 'react';
import PropTypes from 'prop-types';
import { ButtonCancel } from '@components/ButtonCancel';
import info from '@assets/information.svg';
import warning from '@assets/warning.svg';
import error from '@assets/error.svg';
import success from '@assets/success.svg';

export function Toast({ mode, label }) {
  let Icon = null;
  let color = null;

  switch (mode) {
    case 'warning': {
      Icon = warning;
      color = 'black';
      break;
    }
    case 'error': {
      Icon = error;
      break;
    }
    case 'success': {
      Icon = success;
      break;
    }
    default: {
      Icon = info;
      break;
    }
  }

  return (
    <div className={`toastWrapper ${mode}`}>
      <Icon className={`iconToast ${mode}`} />
      <p className={`titleToast ${mode}`}>
        {label}
      </p>
      <ButtonCancel color={color} />
    </div>
  );
}

Toast.propTypes = {
  mode: PropTypes.oneOf(['warning', 'info', 'error', 'success']),
  label: PropTypes.string,
};

Toast.defaultProps = {
  mode: 'info',
  label: 'Info toasty',
};
