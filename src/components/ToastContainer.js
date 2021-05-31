import React, { useEffect, useState } from 'react';

import { Toast } from '@components/Toast';

export const ToastContainer = ({ content, configProps }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsShow(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, [isShow]);

  return (
    isShow
      ? (
        <div id="toastContainer">
          <Toast content={content} configProps={configProps} />
        </div>
      ) : null
  );
};
