import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  setOpenAuthPopup,
  setOpenPageLock,
} from "../../redux/slices/pizzaSlise";
import { IoIosCloseCircleOutline } from "react-icons/io";
import * as S from "./styled";
import SignUp from "./SignUp";
import { useAuth } from "../../hooks/use-auth";
import Form from "./Form";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState("");

  if (error) {
    setTimeout(() => setError(""), 1500);
  }

  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Невірний логін або пароль");
      });
  };

  return signUp ? (
    <SignUp setSignUp={setSignUp} />
  ) : (
    <S.Root isAuth={isAuth}>
      <S.Close
        onClick={() => {
          dispatch(setOpenAuthPopup(false));
          dispatch(setOpenPageLock(false));
        }}
      >
        <IoIosCloseCircleOutline size="24px" color="#fff" />
      </S.Close>
      <S.Title>Log In</S.Title>
      <Form handleLogin={handleLogin} setSignUp={setSignUp} error={error} />
    </S.Root>
  );
};

export default Auth;
