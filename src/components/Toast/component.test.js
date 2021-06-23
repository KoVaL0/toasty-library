import React from 'react';
import { shallow } from 'enzyme';

import {
  ANIMATION_WAVE_TOAST,
  ToastMode,
  ToastPositions,
} from '@/constants';
import Toast from '@/components/Toast';

const options = {
  position: ToastPositions.TOP_LEFT,
  mode: ToastMode.ERROR,
  timeShow: '5000',
  color: '#ffffff',
  animation: ANIMATION_WAVE_TOAST,
};

describe('<Toast />', () => {
  it('should render Toast with props', () => {
    const component = shallow(<Toast content="This is test content" options={options} />);
    expect(component).toMatchSnapshot();
  });

  it('should render Toast without props', () => {
    const component = shallow(<Toast />);
    expect(component).toMatchSnapshot();
  });

  it('should render Toast without props', () => {
    const component = shallow(<Toast />);
    expect(component).toMatchSnapshot();
  });
});
