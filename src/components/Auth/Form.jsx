import React, { useState } from "react";
import * as S from "./styled";

const Form = ({ handleLogin, setSignUp }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
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
