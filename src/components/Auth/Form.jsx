import React, { useState } from "react";
import * as S from "./styled";
import {
  setOpenAuthPopup,
  setOpenPageLock,
} from "../../redux/slices/pizzaSlise";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/use-auth";

const Form = ({ handleLogin, setSignUp }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  if (isAuth) {
    dispatch(setOpenAuthPopup(false));
    dispatch(setOpenPageLock(false));
  }
  return (
    <div>
      <S.Form>
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
          <button onClick={() => handleLogin(email, pass)}>Увійти</button>
          <button onClick={() => setSignUp(true)}>Реєстрація</button>
        </S.Btn>
      </S.Form>
    </div>
  );
};

export default Form;
