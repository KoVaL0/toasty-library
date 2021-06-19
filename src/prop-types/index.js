import pt from 'prop-types';

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

export const toastPropType = {
  content: pt.string,
  position: pt.string,
  options: pt.shape({
    mode: pt.oneOf([WARNING_MODE, INFO_MODE, ERROR_MODE, SUCCESS_MODE]),
    position: pt.oneOf([
      BOTTOM_LEFT_POSITION, BOTTOM_RIGHT_POSITION, TOP_LEFT_POSITION, TOP_RIGHT_POSITION,
    ]),
    timeShow: pt.string,
    color: pt.string,
  }),
};

export const toastDefaultProps = {
  content: DEFAULT_CONTENT,
  position: BOTTOM_RIGHT_POSITION,
  options: {
    mode: INFO_MODE,
    timeShow: '1500',
    color: null,
  },
};
