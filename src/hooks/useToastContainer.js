import { useEffect, useReducer } from 'react';

import { DISPATCH_ADD_TOAST, DISPATCH_REMOVE_TOAST, DISPATCH_SHOW_TOAST } from '@/constants';
import { renderController } from '@/core/renderController';
import { reducer } from '@/hooks/toastContainerReducer';

export const useToastContainer = (props) => {
  const [toast, dispatch] = useReducer(reducer, []);

  const buildToast = (options) => {
    setTimeout(() => {
      renderController.removeToast(DISPATCH_REMOVE_TOAST, options.toastId);
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
    renderController.addListener(DISPATCH_SHOW_TOAST, buildToast);
    renderController.addListener(DISPATCH_REMOVE_TOAST, closeToast);
    return () => renderController.list.clear();
  }, []);

  const getToastToRender = (callback) => {
    const toastList = renderController.listOfActiveToast;
    return toast.map((id) => callback(toastList.get(id)));
  };

  return { getToastToRender };
};
