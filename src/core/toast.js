import React from 'react';
import { render } from 'react-dom';
import ExecutionEnvironment from 'exenv';

import ToastContainer from '@/components/ToastContainer';
import { defaultOptions } from '@/core/defaultOptions';
import { renderController } from '@/core/renderController';
import {
  ERROR_MODE,
  INFO_MODE,
  SHOW,
  SUCCESS_MODE,
  WARNING_MODE,
} from '@/constants';

const containers = new Map();

const isAnyContainerMounted = () => (
  containers.size > 0
);

const generateToastId = () => (
  Math.random()
    .toString(36)
    .substr(2, 9)
);

const getToastId = (options) => {
  if (options && options.toastId) {
    return options.toastId;
  }

  return generateToastId();
};

const mergeOptions = (options, mode) => ({
  ...defaultOptions, ...options, mode, toastId: getToastId(options),
});

const dispatchToast = (content, options) => {
  if (isAnyContainerMounted()) {
    renderController.appendToast(SHOW, content, options);
  } else if (ExecutionEnvironment.canUseDOM) {
    const containerDomNode = document.createElement('div');
    containers.set(options.toastId, containerDomNode);
    render(<ToastContainer content={content} options={options} />, containerDomNode);
  }
  return options.toastId;
};

const createToastByType = (mode) => (content, options) => {
  dispatchToast(content, mergeOptions(options, mode));
};

const toast = (content, options) => {
  dispatchToast(content, mergeOptions(options, INFO_MODE));
};

toast.error = createToastByType(ERROR_MODE);
toast.success = createToastByType(SUCCESS_MODE);
toast.warning = createToastByType(WARNING_MODE);
toast.info = createToastByType(INFO_MODE);

export { toast };
