import { useEffect, useReducer } from 'react';

import { ADD, REMOVE, SHOW } from '@/constants';
import { renderController } from '@/core/renderController';
import { reducer } from '@/hook/toastContainerReducer';

export const useToastContainer = (props) => {
  const [toast, dispatch] = useReducer(reducer, []);

  const buildToast = (options) => {
    setTimeout(() => {
      renderController.removeToast(REMOVE, options.toastId);
    }, options.timeShow);
    dispatch({
      type: ADD,
      toastId: options.toastId,
    });
  };

  const closeToast = (id) => {
    dispatch({
      type: REMOVE,
      toastId: id,
    });
  };

  useEffect(() => {
    renderController.addListener(SHOW, buildToast);
    renderController.addListener(REMOVE, closeToast);
    return () => renderController.list.clear();
  }, []);

  useEffect(() => {
    renderController.appendToast(SHOW, props.content, props.options);
  }, [props]);

  const getToastToRender = (callback) => {
    const toastList = renderController.listOfActiveToast;
    return toast.map((id) => callback(toastList.get(id)));
  };

  return { getToastToRender };
};
