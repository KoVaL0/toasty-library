import React from 'react';

import { useToastContainer } from '@/hook/useToastContainer';
import { toastDefaultProps, toastPropType } from '@/prop-types';
import Toast from '@/components/Toast';

import './styles.css';

const ToastContainer = (props) => {
  const { getToastToRender } = useToastContainer(props);

  return (
    <div>
      <div id="toastContainer-bottomRight" className="toastContainer bottomRight" />
      <div id="toastContainer-bottomLeft" className="toastContainer bottomLeft" />
      <div id="toastContainer-topRight" className="toastContainer topRight" />
      <div id="toastContainer-topLeft" className="toastContainer topLeft" />

      {getToastToRender(({ content, options }) => (
        <div key={options.toastId}>
          <Toast options={options} position={props.position} content={content} />
        </div>
      ))}
    </div>
  );
};

ToastContainer.propTypes = toastPropType;

ToastContainer.defaultProps = toastDefaultProps;

export default ToastContainer;
