import { useEffect, useReducer } from 'react';

import { DISPATCH_ADD_TOAST, DISPATCH_REMOVE_TOAST, DISPATCH_SHOW_TOAST } from '@/constants';
import RenderController from '@/core/renderController';
import { reducer } from '@/reducers/toastContainerReducer';

export const useToastContainer = () => {
  const [toastIds, dispatch] = useReducer(reducer, []);
  const toastController = RenderController.instance;

  const buildToast = (options) => {
    setTimeout(() => {
      toastController.removeToast(DISPATCH_REMOVE_TOAST, options.toastId);
    }, options.timeShow);
    dispatch({
      type: DISPATCH_ADD_TOAST,
      toastId: options.toastId,
    });
  };

  const closeToast = (id) => {
    dispatch({
      type: DISPATCH_REMOVE_TOAST,
      toastId: id,
    });
  };

  useEffect(() => {
    toastController.addListener(DISPATCH_SHOW_TOAST, buildToast);
    toastController.addListener(DISPATCH_REMOVE_TOAST, closeToast);
    return () => toastController.list.clear();
  }, []);

  const getToastToRender = (callback) => {
    const toastToRender = {};
    const toastList = toastController.listOfActiveToast;

    for (let i = 0; i < toastList.size; i += 1) {
      const toast = toastList.get(toastIds[i]);
      const { position } = toast.options;
      if (!toastToRender[position]) {
        toastToRender[position] = [];
      }
      toastToRender[position].push(toast);
    }

    return Object.keys(toastToRender).map((p) => callback(p, toastToRender[p]));
  };

  return { getToastToRender };
};
