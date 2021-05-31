import React from 'react';
import { render } from 'react-dom';
import ExecutionEnvironment from 'exenv';

import { ToastContainer } from '@components/ToastContainer';
import {
  ERROR_MODE,
  INFO_MODE,
  SUCCESS_MODE,
  WARNING_MODE,
} from '@/constants';

const dispatchToasty = (content = 'Toasty', configProps) => {
  if (ExecutionEnvironment.canUseDOM) {
    const containerDomNode = document.createElement('div');
    render(<ToastContainer content={content} configProps={configProps} />, containerDomNode);
  }
};

const toast = (content, configProps) => {
  dispatchToasty(content, configProps);
};

toast.error = (content, configProps) => {
  dispatchToasty(content, { ...configProps, mode: ERROR_MODE });
};
toast.success = (content, configProps) => {
  dispatchToasty(content, { ...configProps, mode: SUCCESS_MODE });
};
toast.warning = (content, configProps) => {
  dispatchToasty(content, { ...configProps, mode: WARNING_MODE });
};
toast.info = (content, configProps) => {
  dispatchToasty(content, { ...configProps, mode: INFO_MODE });
};

export { toast };
