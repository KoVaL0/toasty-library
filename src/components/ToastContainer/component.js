import React from 'react';

import { useToastContainer } from '@/hooks/useToastContainer';
import { toastDefaultProps, toastPropType } from '@/prop-types';
import Toast from '@/components/Toast';

import './styles.scss';

const ToastContainer = (props) => {
  const { getToastToRender } = useToastContainer(props);

  return (
    <div id="toastContainer">
      {getToastToRender(({ content, options }) => (
        <Toast
          key={options.toastId}
          options={options}
          position={props.position}
          content={content}
        />
      ))}
    </div>
  );
};

ToastContainer.propTypes = toastPropType;

ToastContainer.defaultProps = toastDefaultProps;

export default ToastContainer;
