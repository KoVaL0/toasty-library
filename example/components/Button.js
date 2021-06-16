import React from "react";

import { toast } from "../../dist/index";

const Button = ({ content, type, position, timeShow, color }) => {
  const handleShowToast = () => {
    switch (type) {
      case "error": {
        toast.error(content, { position, timeShow, color });
        break;
      }
      case "warning": {
        toast.warning(content, { position, timeShow, color });
        break;
      }
      case "success": {
        toast.success(content, { position, timeShow, color });
        break;
      }
      case "info": {
        toast.info(content, { position, timeShow, color });
        break;
      }
    }
  };

  return (
    <button
      className="btn btn-success mx-auto"
      type="button"
      onClick={handleShowToast}
      style={{ width: "100%" }}
    >
      View toast
    </button>
  );
};

export default Button;
