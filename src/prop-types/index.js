import pt from 'prop-types';

import {
  ANIMATION_WAVE_TOAST,
  DEFAULT_CONTENT,
  DEFAULT_TIME_SHOW_TOAST,
  ToastMode,
  ToastPositions,
} from '@/constants';

export const toastPropType = {
  content: pt.string,
  options: pt.shape({
    mode: pt.oneOf([ToastMode.WARNING, ToastMode.INFO, ToastMode.ERROR, ToastMode.SUCCESS]),
    position: pt.oneOf([
      ToastPositions.BOTTOM_LEFT,
      ToastPositions.BOTTOM_RIGHT,
      ToastPositions.TOP_LEFT,
      ToastPositions.TOP_RIGHT,
    ]),
    timeShow: pt.string,
    color: pt.string,
    animation: pt.string,
  }),
};

export const toastDefaultProps = {
  content: DEFAULT_CONTENT,
  options: {
    position: ToastPositions.BOTTOM_RIGHT,
    mode: ToastMode.INFO,
    timeShow: DEFAULT_TIME_SHOW_TOAST,
    color: '',
    animation: ANIMATION_WAVE_TOAST,
  },
};
