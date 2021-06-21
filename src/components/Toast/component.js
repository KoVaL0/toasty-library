import React from 'react';
import classNames from 'classnames';

import CancelButton from '@/components/CancelButton';
import RenderController from '@/core/renderController';
import { toastDefaultProps, toastPropType } from '@/prop-types';
import { DISPATCH_REMOVE_TOAST } from '@/constants';
import info from '@assets/information.svg';
import warning from '@assets/warning.svg';
import error from '@assets/error.svg';
import success from '@assets/success.svg';
import {
  ANIMATION_WAVE_TOAST,
  BLACK_TOAST_COLOR,
  BOTTOM_LEFT_POSITION, ERROR_MODE,
  SUCCESS_MODE,
  TOP_LEFT_POSITION, WARNING_MODE,
  WHITE_TOAST_COLOR,
} from '@/constants/options';

import './styles.scss';

const Toast = ({
  options, content,
}) => {
  let color;
  let Icon;

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

  const getWaveAnimation = () => {
    if (options.position === TOP_LEFT_POSITION || options.position === BOTTOM_LEFT_POSITION) {
      return 'wave_left';
    }
    return 'wave_right';
  };

  const toastWrapper = classNames('toastWrapper', 'animation', {
    [options.mode]: options.mode,
    [options.animation]: options.animation,
    [getWaveAnimation()]: options.animation === ANIMATION_WAVE_TOAST,
  });

  const iconToast = classNames('iconToast', {
    [options.mode]: options.mode,
  });

  const titleToast = classNames('titleToast', {
    [options.mode]: options.mode,
  });

  const handleClose = (id) => () => {
    const toastController = new RenderController();
    toastController.removeToast(DISPATCH_REMOVE_TOAST, id);
  };

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

  return toast;
};

Toast.propTypes = toastPropType;

Toast.defaultProps = toastDefaultProps;

export default Toast;
