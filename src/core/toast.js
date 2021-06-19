import { defaultOptions } from '@/core/defaultOptions';
import renderController from '@/core/renderController';
import {
  DISPATCH_SHOW_TOAST,
  ERROR_MODE,
  INFO_MODE,
  SUCCESS_MODE,
  WARNING_MODE,
} from '@/constants';

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
  const service = new renderController();
  service.appendToast(DISPATCH_SHOW_TOAST, content, options);
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
