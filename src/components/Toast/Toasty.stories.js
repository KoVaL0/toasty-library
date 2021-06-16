import React from 'react';
import Toast from './index';

export default {
  title: 'toasty-library/Toasty',
  component: Toast,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Toast {...args} />;

export const Info = Template.bind({});
Info.args = {
  content: 'Info toasty',
};

export const Warning = Template.bind({});
Warning.args = {
  content: 'Warning toasty',
  mode: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  content: 'Error toasty',
  mode: 'error',
};

export const Success = Template.bind({});
Success.args = {
  content: 'Success toasty',
  mode: 'success',
};
