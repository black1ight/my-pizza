import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../redux/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setOpenAuthPopup } from "../../redux/slices/pizzaSlise";
import { IoIosCloseCircleOutline } from "react-icons/io";
import * as S from "./styled";
import SignUp from "./SignUp";
import { useAuth } from "../../hooks/use-auth";
import Form from "./Form";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);

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
        // userId && setSignUp(false);
      })
      .catch(console.error);
  };

  const logOut = () => {
    dispatch(removeUser());
    console.log(isAuth);
  };

  return signUp ? (
    <SignUp setSignUp={setSignUp} />
  ) : (
    <S.Root isAuth={isAuth}>
      <S.Close
        onClick={() => {
          dispatch(setOpenAuthPopup(false));
        }}
      >
        <IoIosCloseCircleOutline size="24px" color="#fff" />
      </S.Close>
      <S.Title>{isAuth ? `Wellcome` : "Log In"}</S.Title>
      {isAuth ? (
        <S.Form>
          <S.Btn isAuth={isAuth}>
            <button onClick={logOut}>Вийти</button>
          </S.Btn>
        </S.Form>
      ) : (
        <Form handleLogin={handleLogin} setSignUp={setSignUp} />
      )}
    </S.Root>
  );
};

export default Auth;
