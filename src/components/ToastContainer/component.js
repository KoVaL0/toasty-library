import React from 'react';

import { useToastContainer } from '@/hooks/useToastContainer';
import { toastDefaultProps, toastPropType } from '@/prop-types';
import Toast from '@/components/Toast';
import classNames from 'classnames';

import './styles.scss';

const ToastContainer = (props) => {
  const { getToastToRender } = useToastContainer(props);

  return (
    <div id="toastContainer">
      {
        getToastToRender((position, toastList) => {
          const toastContainer = classNames('toastContainer', {
            [`toastContainer-${position}`]: position,
          });

          return (
            <div key={position} id={`toastContainer-${position}`} className={toastContainer}>
              {
              toastList.map(({ content, options }) => (
                <Toast
                  key={options.toastId}
                  options={options}
                  content={content}
                />
              ))
            }
            </div>
          );
        })
      }
    </div>
  );
};

ToastContainer.propTypes = toastPropType;

ToastContainer.defaultProps = toastDefaultProps;

export default ToastContainer;
