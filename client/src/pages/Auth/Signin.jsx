import { useEffect, useState } from "react";

//styles
import { Container, Box, InputBox } from "./Auth.styles";
import { ButtonFill } from "../../styles/Main.styles";

//loader gif
import loader1 from "../../assets/loader1.gif";
import loader2 from "../../assets/loader2.gif";

//firebase
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

//others
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getInputErrorMsg } from "../../utils";
import { useClickOutside, useSelect, useViewPassword } from "../../custom-hook";

const Signin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isAuthError, setIsAuthError] = useState(false);
  const [authErrorMsg, setAuthErrorMsg] = useState(false);
  const [isLoading, setIsLoading] = useState({ user: false, guest: false });

  //scroll the page to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Custom-hooks
  //For viewing the password
  const [view, viewObj] = useViewPassword();
  const { viewPasswordIcon, togglePassword } = viewObj;

  //For highlighting the input border on select
  const [inputBoxes, select] = useSelect();
  const { selectBox, undoSelectedBox } = select;

  // To undo the input box highlight border when clicked outside
  const nodeRef = useClickOutside(() => {
    undoSelectedBox();
  });

  //sign in with firebase auth
  const signinHandler = async (email, password, type) => {
    setIsLoading((prev) => ({ ...prev, [type]: true }));
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthError(false);
      navigate("/");
    } catch (error) {
      setIsAuthError(true);
      setAuthErrorMsg(error.message);
    } finally {
      setIsLoading((prev) => ({ ...prev, [type]: false }));
    }
  };

  //noraml user sign in
  const onSubmit = (data) => {
    const { email, password } = data;
    signinHandler(email, password, "user");
  };

  // guest sign in
  const clickHandler = (email, password) => {
    signinHandler(email, password, "guest");
  };

  //input error style
  const inputErrorStyle = (type) => {
    return { boxShadow: errors[type] && "0px 0px 0px 1px red" };
  };

  return (
    <Container>
      <Box>
        <h1 className="auth__title">Sign In To Your Account</h1>
        {isAuthError && <div className="auth__error">{authErrorMsg}</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox ref={nodeRef} selected={inputBoxes.email}>
            <div
              className="auth__input"
              onClick={() => selectBox("email")}
              style={inputErrorStyle("email")}
            >
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && getInputErrorMsg("email", errors.email?.type)}
          </InputBox>

          <InputBox ref={nodeRef} selected={inputBoxes.password}>
            <div
              className="auth__input"
              onClick={() => selectBox("password")}
              style={inputErrorStyle("password")}
            >
              <input
                type={view.password ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              <div onClick={togglePassword}>{viewPasswordIcon}</div>
            </div>
            {errors.password &&
              getInputErrorMsg("email", errors.password?.type)}
          </InputBox>

          <ButtonFill className="auth__btn">
            {isLoading?.user ? (
              <img src={loader1} alt="loader-gif" />
            ) : (
              "Sign In"
            )}
          </ButtonFill>
        </form>
        <div
          className="auth__test-login"
          onClick={() => clickHandler("admin123@gmail.com", "abc123")}
        >
          <span>Continue as a Guest</span>
          {isLoading?.guest && <img src={loader2} alt="loader-gif" />}
        </div>
        <div className="auth__link">
          Don't have an account ? <Link to={"/signup"}>Sign Up</Link>
        </div>
      </Box>
    </Container>
  );
};

export default Signin;
