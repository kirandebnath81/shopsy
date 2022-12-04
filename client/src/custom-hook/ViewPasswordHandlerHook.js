import React, { useState } from "react";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const useViewPassword = () => {
  const [view, setView] = useState({ password: false, confirmPassword: false });

  const viewObj = {
    viewPasswordIcon: "",
    viewConfirmPasswordIcon: "",
    togglePassword: function () {
      setView((prev) => ({ ...prev, password: !prev.password }));
    },
    toggleConfirmPassword: function () {
      setView((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword }));
    },
  };

  if (view.password) {
    viewObj.viewPasswordIcon = <AiOutlineEye />;
  } else {
    viewObj.viewPasswordIcon = <AiOutlineEyeInvisible />;
  }

  if (view.confirmPassword) {
    viewObj.viewConfirmPasswordIcon = <AiOutlineEye />;
  } else {
    viewObj.viewConfirmPasswordIcon = <AiOutlineEyeInvisible />;
  }

  return [view, viewObj];
};

export default useViewPassword;
