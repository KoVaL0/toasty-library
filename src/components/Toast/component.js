import React from 'react';
import ReactDOM from 'react-dom';
import ExecutionEnvironment from 'exenv';
import classNames from 'classnames';

import CancelButton from '@/components/CancelButton';
import { renderController } from '@/core/renderController';
import { toastDefaultProps, toastPropType } from '@/prop-types';
import { REMOVE } from '@/constants';
import info from '@assets/information.svg';
import warning from '@assets/warning.svg';
import error from '@assets/error.svg';
import success from '@assets/success.svg';
import {
  BLACK, ERROR_MODE, SUCCESS_MODE, WARNING_MODE, WHITE,
} from '@/constants/options';

import './styles.css';

const Toast = ({
  options, position, content,
}) => {
  let color;
  let Icon;

  const getToastPosition = () => {
    if (options.position) {
      return options.position;
    }
    return position;
  };

  switch (options.mode) {
    case WARNING_MODE: {
      Icon = warning;
      color = BLACK;
      break;
    }
    case ERROR_MODE: {
      Icon = error;
      break;
    }
    case SUCCESS_MODE: {
      Icon = success;
      break;
    }
    default: {
      Icon = info;
      color = WHITE;
      break;
    }
  }

  const toastWrapper = classNames('toastWrapper', {
    [options.mode]: options.mode,
    [getToastPosition()]: position,
  });

  const iconToast = classNames('iconToast', {
    [options.mode]: options.mode,
  });

  const titleToast = classNames('titleToast', {
    [options.mode]: options.mode,
  });

  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const closeToast = (id) => () => {
    renderController.removeToast(REMOVE, id);
  };

  const container = document.getElementById(`toastContainer-${getToastPosition()}`);

  const toast = (
    <div className={toastWrapper}>
      <Icon className={iconToast} />
      <p className={titleToast}>
        {content}
      </p>
      <CancelButton id={options.toastId} color={color} closeToast={closeToast} />
    </div>
  );

  return ReactDOM.createPortal(toast, container);
};

Toast.propTypes = toastPropType;

Toast.defaultProps = toastDefaultProps;

export default Toast;
