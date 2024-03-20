import React from "react";
import * as S from "./styled";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({
  count,
  title,
  price,
  imageUrl,
  type,
  size,
  id,
  board,
  noAdd,
}) => {
  const dispatch = useDispatch();

  const onClickMinus = () => {
    dispatch(minusItem({ id, type, size, board }));
  };

  const onClickPlus = () => {
    dispatch(addItem({ id, type, size, board }));
  };
  const onClickRemove = () => {
    if (window.confirm("Видалити товар?")) {
      dispatch(removeItem({ id, type, size }));
    }
  };

  return (
    <S.Item>
      <img src={imageUrl} alt="pizza" />
      <S.Descr>
        <h4>{title}</h4>
        <span>{type}</span>
        <span>Ø {size} см</span>
        {board ? <span>борт: "{board}"</span> : ""}
      </S.Descr>
      {noAdd ? <S.NoAdd>{noAdd}</S.NoAdd> : ""}

      <S.Count>
        <S.CountWripper>
          <S.SvgMinus
            count={count}
            onClick={onClickMinus}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#b6b6b6"
            ></path>
          </S.SvgMinus>
          <span>{count}</span>
          <S.SvgPlus
            onClick={onClickPlus}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#fff"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#fff"
            ></path>
          </S.SvgPlus>
        </S.CountWripper>
        <S.Price>{price} ₴</S.Price>
      </S.Count>
      <S.Close onClick={onClickRemove}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#b6b6b6"
          ></path>
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#b6b6b6"
          ></path>
        </svg>
      </S.Close>
    </S.Item>
  );
};

export default CartItem;
