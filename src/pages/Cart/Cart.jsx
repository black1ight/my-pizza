import React from "react";
import Header from "../../components/Header/Header";
import * as S from "./styled";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import { clearItems } from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const onClickClear = () => {
    if (window.confirm("Ви дійсно бажаєте очистити кошик?")) {
      dispatch(clearItems());
    }
  };

  if (items.length === 0) {
    return <CartEmpty />;
  }
  return (
    <div>
      <Header />
      <S.CartRoot>
        <S.Top>
          <S.Title>
            <svg width="33" height="33" viewBox="0 0 33 26" fill="none">
              <path
                d="M27.562 4.763a1.96 1.96 0 00-1.531-.732H4.689l-.19-1.366A1.977 1.977 0 002.548.97H.874a.875.875 0 000 1.75h1.673a.22.22 0 01.217.188l2.362 16.928a1.977 1.977 0 001.95 1.696h.948a2.628 2.628 0 002.475 3.5 2.628 2.628 0 002.474-3.5h4.676a2.628 2.628 0 002.474 3.5 2.628 2.628 0 002.475-3.5h1.9a.875.875 0 000-1.75H7.078a.22.22 0 01-.217-.188l-.218-1.562h17.232a1.98 1.98 0 001.925-1.556l2.157-10.062a1.96 1.96 0 00-.394-1.65zM11.375 22.406a.876.876 0 01-1.75 0 .876.876 0 011.75 0zm9.625 0a.876.876 0 01-1.75 0 .876.876 0 011.75 0zm5.245-16.36l-2.157 10.062a.22.22 0 01-.214.173H6.398l-1.465-10.5H26.03c.086 0 .14.044.17.081.03.038.062.1.044.184z"
                fill="#fff"
              ></path>
            </svg>
            <h4>Кошик</h4>
          </S.Title>
          <S.Clear onClick={onClickClear}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8.33337 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M11.6666 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span>очистити кошик</span>
          </S.Clear>
        </S.Top>
        <S.Body>
          {items.map((item, id) => (
            <CartItem key={id} {...item} />
          ))}
          <S.Total>
            <S.TotalCount>
              <p>Усього піцц:</p>
              <span>
                {items.reduce((sum, obj) => {
                  return obj.count + sum;
                }, 0)}
                шт.
              </span>
            </S.TotalCount>
            <S.TotalPrice>
              <p>Сума замовлення:</p>
              <span>{totalPrice} ₴</span>
            </S.TotalPrice>
          </S.Total>
          <S.Buttons>
            <div>
              <Link to="/">
                <S.BtnBack>Повернутися</S.BtnBack>
              </Link>
            </div>
            <S.BtnPay>Перейти до сплати</S.BtnPay>
          </S.Buttons>
        </S.Body>
      </S.CartRoot>
    </div>
  );
};

export default Cart;
