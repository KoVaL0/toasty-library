import React from 'react';
import ReactDOM from 'react-dom';
import ExecutionEnvironment from 'exenv';
import classNames from 'classnames';

import CancelButton from '@/components/CancelButton';
import { renderController } from '@/core/renderController';
import { toastDefaultProps, toastPropType } from '@/prop-types';
import { DISPATCH_REMOVE_TOAST } from '@/constants';
import info from '@assets/information.svg';
import warning from '@assets/warning.svg';
import error from '@assets/error.svg';
import success from '@assets/success.svg';
import {
  BLACK_TOAST_COLOR, ERROR_MODE, SUCCESS_MODE, WARNING_MODE, WHITE_TOAST_COLOR,
} from '@/constants/options';

import './styles.scss';

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
      color = BLACK_TOAST_COLOR;
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
      color = WHITE_TOAST_COLOR;
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

  const handleClose = (id) => () => {
    renderController.removeToast(DISPATCH_REMOVE_TOAST, id);
  };

  const getContainer = () => document.getElementById(`toastContainer-${getToastPosition()}`);

  const createContainer = () => {
    const toastContainer = document.getElementById('toastContainer');
    const div = document.createElement('div');
    div.id = `toastContainer-${getToastPosition()}`;
    div.className = `toastContainer ${getToastPosition()}`;
    toastContainer.append(div);
  };

  if (!getContainer()) {
    createContainer();
  }

  const getBackgroundColor = () => ({ backgroundColor: options.color });

  const toast = (
    <div className={toastWrapper} style={getBackgroundColor()} key={options.toastId}>
      <Icon className={iconToast} style={getBackgroundColor()} />
      <p className={titleToast} style={getBackgroundColor()}>
        {content}
      </p>
      <CancelButton id={options.toastId} color={color} onClose={handleClose} />
    </div>
  );

  return ReactDOM.createPortal(toast, getContainer());
};

Toast.propTypes = toastPropType;

Toast.defaultProps = toastDefaultProps;

export default Toast;
