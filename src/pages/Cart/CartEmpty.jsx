import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import cartEmptyImg from "./../../assets/img/empty-cart.png";
import Header from "../../components/Header/Header";

const CartEmpty = () => {
  return (
    <div>
      <Header />
      <S.EmptyRoot>
        <h2>
          Кошик порожній <span>😕</span>
        </h2>
        <p>
          Мабуть, Ви ще не замовляли піццу.
          <br />
          Для того, щоб зробити замовлення, перейдіть на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/">
          <button>Повернутися назад</button>
        </Link>
      </S.EmptyRoot>
    </div>
  );
};

export default CartEmpty;
