import React from 'react';
import ReactDOM from 'react-dom';
import ExecutionEnvironment from 'exenv';
import classNames from 'classnames';

import { ButtonCancel } from '@components/ButtonCancel';
import info from '@assets/information.svg';
import warning from '@assets/warning.svg';
import error from '@assets/error.svg';
import success from '@assets/success.svg';

import '@components/Toast.css';
import {
  BOTTOM_RIGHT_POSITION,
  DEFAULT_CONTENT,
  INFO_MODE,
} from '@/constants';
import { toastPropType } from '@/prop-types';

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

Toast.propTypes = toastPropType;

Toast.defaultProps = {
  content: DEFAULT_CONTENT,
  configProps: { mode: INFO_MODE, position: BOTTOM_RIGHT_POSITION },
};

export { Toast };
