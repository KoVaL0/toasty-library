import React, { useState } from 'react';

import Button from './Button';
import InputToastContent from './InputToastContent';
import CheckBoxDefaultColor from './CheckBoxDefaultColor';
import ColorPicker from './ColorPicker';
import InputTimeShow from './InputTimeShow';
import SelectToastPosition from './SelectToastPosition';
import SelectToastType from './SelectToastType';
import SelectToastAnimation from './SelectToastAnimation';
import { ToastContainer } from '../../dist/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../dist/index.css';

export const App = () => {
  const [contentToast, setContentToast] = useState('Toast notification');
  const [colorToast, setColorToast] = useState('');
  const [animationToast, setAnimationToast] = useState('wave');
  const [typeToast, setTypeToast] = useState('error');
  const [positionToast, setPositionToast] = useState('bottomRight');
  const [timeShowToast, setTimeShowToast] = useState('1500');
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="bg-dark">
      <div
        className="container-sm d-flex justify-content-center"
        style={{ height: '100vh', flexDirection: 'column' }}
      >
        <ToastContainer />
        <div className="row justify-content-center">
          <h1 className="text-white-50 mb-5">Toasty-library</h1>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-4">
            <InputToastContent
              contentToast={contentToast}
              setContentToast={setContentToast}
            />
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div
            className="col-2 d-flex"
            style={{ justifyContent: 'center', flexDirection: 'column' }}
          >
            <SelectToastPosition
              positionToast={positionToast}
              setPositionToast={setPositionToast}
            />
          </div>
          <div
            className="col-2 d-flex"
            style={{ justifyContent: 'center', flexDirection: 'column' }}
          >
            <SelectToastType
              typeToast={typeToast}
              setTypeToast={setTypeToast}
            />
          </div>
        </div>
        <div className="row justify-content-center mb-3 align-items-end position-relative">
          <div
            className="col-2 d-flex"
            style={{ justifyContent: 'center', flexDirection: 'column' }}
          >
            <SelectToastAnimation
              animationToast={animationToast}
              setAnimationToast={setAnimationToast}
            />
          </div>
          <div className="col-2">
            <CheckBoxDefaultColor
              showColorPicker={showColorPicker}
              setColorToast={setColorToast}
              setShowColorPicker={setShowColorPicker}
            />
          </div>
          {showColorPicker ? (
            <ColorPicker
              colorToast={colorToast}
              setColorToast={setColorToast}
            />
          ) : null}
        </div>
        <div className="row justify-content-center align-items-center mb-3 position-relative">
          <div className="col-4">
            <InputTimeShow
              timeShowToast={timeShowToast}
              setTimeShowToast={setTimeShowToast}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 d-flex">
            <Button
              content={contentToast}
              type={typeToast}
              position={positionToast}
              timeShow={timeShowToast}
              color={colorToast}
              animation={animationToast}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
