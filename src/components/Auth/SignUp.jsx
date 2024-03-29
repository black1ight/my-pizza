import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  setOpenPageLock,
  setOpenAuthPopup,
} from "../../redux/slices/pizzaSlise";
import { IoIosCloseCircleOutline } from "react-icons/io";
import * as S from "./styled";
import { useAuth } from "../../hooks/use-auth";

const SignUp = ({ setSignUp }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { isAuth } = useAuth();

  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
        alert(errorCode);
      });
  };

  if (isAuth) {
    dispatch(setOpenAuthPopup(false));
    dispatch(setOpenPageLock(false));
  }

  return (
    <S.Root>
      <S.Close
        onClick={() => {
          dispatch(setOpenPageLock(false));
        }}
      >
        <IoIosCloseCircleOutline size="24px" color="#fff" />
      </S.Close>
      <S.Form>
        <S.Title>Sign Up</S.Title>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Login"
          type="email"
          value={email}
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          type="password"
          value={pass}
        />
        <S.Btn>
          <button onClick={() => handleSignUp(email, pass)}>Реєстрація</button>
          <button onClick={() => setSignUp(false)}>Назад</button>
        </S.Btn>
      </S.Form>
    </S.Root>
  );
};

export default SignUp;
