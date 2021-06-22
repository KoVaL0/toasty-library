import { defaultOptions } from '@/core/defaultOptions';
import RenderController from '@/core/renderController';
import {
  DISPATCH_SHOW_TOAST,
  ToastMode,
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
  const toastController = new RenderController();
  toastController.appendToast(DISPATCH_SHOW_TOAST, content, options);
};

const createToastByType = (mode) => (content, options) => {
  dispatchToast(content, mergeOptions(options, mode));
};

const toast = (content, options) => {
  dispatchToast(content, mergeOptions(options, ToastMode.INFO));
};

toast.error = createToastByType(ToastMode.ERROR);
toast.success = createToastByType(ToastMode.SUCCESS);
toast.warning = createToastByType(ToastMode.WARNING);
toast.info = createToastByType(ToastMode.INFO);

export { toast };
