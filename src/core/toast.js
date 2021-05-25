import React from 'react';
import ReactDOM from 'react-dom';
import { Toast } from '@components';
import ExecutionEnvironment from 'exenv';

export function toast() {
  let container;
  if (ExecutionEnvironment.canUseDOM) {
    container = document.getElementById('toastContainer');
    console.log(container, 'dddd');
  }
  if (!container) {
    return null;
  }
  console.log(ReactDOM.createPortal(<Toast />, container));
  return ReactDOM.createPortal(<Toast />, container);
}
