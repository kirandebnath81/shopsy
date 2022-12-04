import { useState } from "react";

const useSelect = () => {
  // by default highlight value of all components
  const boxes = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [inputBoxes, setInputBoxes] = useState(boxes);

  const select = {
    selectBox: function (type) {
      setInputBoxes({ ...boxes, [type]: "selected" });
    },

    undoSelectedBox: function () {
      setInputBoxes(boxes);
    },
  };

  return [inputBoxes, select];
};

export default useSelect;
