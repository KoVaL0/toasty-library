import React from 'react';
import { shallow } from 'enzyme';

import {
  ANIMATION_WAVE_TOAST,
  ToastMode,
  ToastPositions,
} from '@/constants';
import ToastContainer from '@/components/ToastContainer';

const setUp = (props) => shallow(<ToastContainer {...props} />);

const props = {
  content: 'This is test content',
  options: {
    position: ToastPositions.BOTTOM_RIGHT,
    mode: ToastMode.INFO,
    timeShow: '5000',
    color: '#ffffff',
    animation: ANIMATION_WAVE_TOAST,
  },
};

describe('<ToastContainer />', () => {
  it('should render ToastContainer with props', () => {
    const component = setUp(props);
    global.expect(component).toMatchSnapshot();
  });

  it('should render ToastContainer without props', () => {
    const component = setUp();
    global.expect(component).toMatchSnapshot();
  });

  it('should contain #toastContainer wrapper', () => {
    const component = setUp();
    const wrapper = component.find('#toastContainer');
    global.expect(wrapper).toHaveLength(1);
  });

  it('should return class for func classNames', () => {
    const component = setUp();
    const wrapper = component.find('#toastContainer');
    global.expect(wrapper).toHaveLength(1);
  });
});
