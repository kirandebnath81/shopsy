//icons
import { BiErrorCircle } from "react-icons/bi";

const getInputErrorMsg = (name, type) => {
  if (type === "minLength") {
    return (
      <div className="auth__input-error">
        <BiErrorCircle />
        <span>Min 6 characters required {name}</span>
      </div>
    );
  } else {
    return (
      <div className="auth__input-error">
        <BiErrorCircle />
        <span>Please enter a valid {name}</span>
      </div>
    );
  }
};

export default getInputErrorMsg;
