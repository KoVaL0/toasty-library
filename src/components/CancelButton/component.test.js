import React from 'react';
import { shallow } from 'enzyme';

import CancelButton from '@/components/CancelButton';

describe('<CancelButton />', () => {
  it('should render CancelButton with props', () => {
    const component = shallow(<CancelButton color="#ffffff" onClose={() => {}} id="1" />);
    expect(component).toMatchSnapshot();
  });

  it('should render CancelButton without props', () => {
    const component = shallow(<CancelButton />);
    expect(component).toMatchSnapshot();
  });
});
