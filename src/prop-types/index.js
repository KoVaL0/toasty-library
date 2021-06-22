import pt from 'prop-types';

import {
  DEFAULT_CONTENT,
  ToastMode,
  ToastPositions,
} from '@/constants';
import { ANIMATION_WAVE_TOAST, DEFAULT_TIME_SHOW_TOAST } from '../constants/options';

export const toastPropType = {
  content: pt.string,
  position: pt.string,
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
  position: ToastPositions.BOTTOM_RIGHT,
  options: {
    mode: ToastMode.INFO,
    timeShow: DEFAULT_TIME_SHOW_TOAST,
    color: '',
    animation: ANIMATION_WAVE_TOAST,
  },
};
