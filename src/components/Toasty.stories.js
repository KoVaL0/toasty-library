import React from 'react';
import { Toast } from '@components';

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
  label: 'Info toasty',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning toasty',
  mode: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error toasty',
  mode: 'error',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success toasty',
  mode: 'success',
};
