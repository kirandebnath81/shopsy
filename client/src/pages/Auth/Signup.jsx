import { useEffect, useState } from "react";

//styles
import { Container, Box, InputBox } from "./Auth.styles";
import { ButtonFill } from "../../styles/Main.styles";

//firebase
import { auth, db } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

//others
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loader1 from "../../assets/loader1.gif";
import { getInputErrorMsg } from "../../utils";
import { useClickOutside, useViewPassword, useSelect } from "../../custom-hook";
import { useAuth } from "../../contexts";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const [isAuthError, setIsAuthError] = useState(false);
  const [authErrorMsg, setAuthErrorMsg] = useState(false);
  const [userName, setUserName] = useState("");
  const [isloading, setIsloading] = useState(false);

  //scroll the page to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // custom-hook
  //For viewing the password
  const [view, viewObj] = useViewPassword();
  const {
    viewPasswordIcon,
    viewConfirmPasswordIcon,
    togglePassword,
    toggleConfirmPassword,
  } = viewObj;

  //For highlighting the input border on select
  const [inputBoxes, select] = useSelect();
  const { selectBox, undoSelectedBox } = select;

  // To undo the input box highlight border when clicked outside
  const nodeRef = useClickOutside(() => {
    undoSelectedBox();
  });

  //writing profile data to firebase db
  useEffect(() => {
    if (user !== null) {
      (async function () {
        const profileRef = ref(db, `${user.uid}/profile`);

        try {
          await set(profileRef, { name: userName });
          setIsloading(false);
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [user, userName, navigate]);

  //signup with firebase auth
  const onSubmit = async (data) => {
    const { email, password, confirmPassword, name } = data;

    setUserName(name);

    if (password !== confirmPassword) {
      setIsAuthError(true);
      setAuthErrorMsg("Password does not match");
      return;
    }

    setIsloading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsAuthError(false);
    } catch (error) {
      setIsAuthError(true);
      setAuthErrorMsg(error.message);
    } finally {
      setIsloading(false);
    }
  };

  //input error styling
  const inputErrorStyle = (type) => {
    return {
      boxShadow: errors[type] && "0px 0px 0px 1px red",
    };
  };

  return (
    <Container>
      <Box>
        <div className="auth__title">Create Your Account</div>
        {isAuthError && <div className="auth__error">{authErrorMsg}</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox ref={nodeRef} selected={inputBoxes.name}>
            <div
              className="auth__input"
              onClick={() => selectBox("name")}
              style={inputErrorStyle("name")}
            >
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
              />
            </div>
            {errors.name && getInputErrorMsg("name", errors.name?.type)}
          </InputBox>

          <InputBox ref={nodeRef} selected={inputBoxes.email}>
            <div
              className="auth__input"
              onClick={() => selectBox("email")}
              style={inputErrorStyle("email")}
            >
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
              />
            </div>
            {errors.email && getInputErrorMsg("email", errors.name?.type)}
          </InputBox>

          <InputBox ref={nodeRef} selected={inputBoxes.password}>
            <div
              className="auth__input"
              onClick={() => selectBox("password")}
              style={inputErrorStyle("password")}
            >
              <input
                type={view.password ? "text" : "password"}
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
              />
              <div onClick={togglePassword}>{viewPasswordIcon}</div>
            </div>
            {errors.password &&
              getInputErrorMsg("password", errors.password?.type)}
          </InputBox>

          <InputBox ref={nodeRef} selected={inputBoxes.confirmPassword}>
            <div
              className="auth__input"
              onClick={() => selectBox("confirmPassword")}
              style={inputErrorStyle("confirmPassword")}
            >
              <input
                type={view.confirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                })}
                placeholder="Confirm Password"
              />
              <div onClick={toggleConfirmPassword}>
                {viewConfirmPasswordIcon}
              </div>
            </div>
            {errors.confirmPassword &&
              getInputErrorMsg("password", errors.confirmPassword?.type)}
          </InputBox>

          <ButtonFill className="auth__btn">
            {isloading ? <img src={loader1} alt="" /> : "Sign Up"}
          </ButtonFill>
        </form>
        <div className="auth__link">
          Already have an account ?<Link to={"/signin"}>Sign In</Link>
        </div>
      </Box>
    </Container>
  );
};

export default Signup;
