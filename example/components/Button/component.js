import React from 'react';

import { toast } from 'toasty-library';

const Button = ({
  content, type, position, timeShow, color, animation,
}) => {
  const handleShowToast = () => {
    switch (type) {
      case 'error': {
        toast.error(content, {
          position, timeShow, color, animation,
        });
        break;
      }
      case 'warning': {
        toast.warning(content, {
          position, timeShow, color, animation,
        });
        break;
      }
      case 'success': {
        toast.success(content, {
          position, timeShow, color, animation,
        });
        break;
      }
      case 'info': {
        toast.info(content, {
          position, timeShow, color, animation,
        });
        break;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <button
      className="btn btn-success mx-auto"
      type="button"
      onClick={handleShowToast}
      style={{ width: '100%' }}
    >
      View toast
    </button>
  );
};

export default Button;
