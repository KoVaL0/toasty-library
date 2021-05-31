import React from 'react';
import ReactDOM from 'react-dom';
import ExecutionEnvironment from 'exenv';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ButtonCancel } from '@components/ButtonCancel';
import info from '@assets/information.svg';
import warning from '@assets/warning.svg';
import error from '@assets/error.svg';
import success from '@assets/success.svg';

import '@components/Toast.css';
import {
  BOTTOM_LEFT_POSITION,
  BOTTOM_RIGHT_POSITION,
  DEFAULT_CONTENT,
  ERROR_MODE,
  INFO_MODE,
  SUCCESS_MODE,
  TOP_LEFT_POSITION,
  TOP_RIGHT_POSITION,
  WARNING_MODE,
} from '@/constants';

const Toast = ({ content, configProps }) => {
  console.log('🚀 ~ file: Toast.js ~ line 14 ~ Toast ~ mode', configProps);
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const container = document.getElementById('toastContainer');
  let Icon = null;
  let color = null;

  switch (configProps.mode) {
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

  const toastWrapper = classNames('toastWrapper', {
    [configProps.mode]: configProps.mode,
    [configProps.position]: configProps.position,
  });

  const iconToast = classNames('iconToast', {
    [configProps.mode]: configProps.mode,
  });

  const titleToast = classNames('titleToast', {
    [configProps.mode]: configProps.mode,
  });

  const toast = (
    <div className={toastWrapper}>
      <Icon className={iconToast} />
      <p className={titleToast}>
        {content}
      </p>
      <ButtonCancel color={color} />
    </div>
  );

  return ReactDOM.createPortal(toast, container);
};

Toast.propTypes = {
  content: PropTypes.string,
  configProps: PropTypes.shape({
    mode: PropTypes.oneOf([WARNING_MODE, INFO_MODE, ERROR_MODE, SUCCESS_MODE]),
    position: PropTypes.oneOf([
      BOTTOM_LEFT_POSITION, BOTTOM_RIGHT_POSITION, TOP_LEFT_POSITION, TOP_RIGHT_POSITION,
    ]),
  }),
};

Toast.defaultProps = {
  content: DEFAULT_CONTENT,
  configProps: { mode: INFO_MODE, position: BOTTOM_RIGHT_POSITION },
};

export { Toast };
