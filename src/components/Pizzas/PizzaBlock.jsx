import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItemById } from "../../redux/slices/cartSlice";
import * as S from "./styles";
import { setActivePizzaId, setOpenPopup } from "../../redux/slices/pizzaSlise";

const PizzaBlock = ({
  id,
  imageUrl,
  title,
  subtitle,
  types,
  sizes,
  price,
  category,
  page,
  noadd,
}) => {
  const [typeActive, setTypeActive] = useState(0);
  const [sizeActive, setSizeActive] = useState(0);
  const [boardActive, setBoardActive] = useState(null);
  const pizzaTypes = ["Пухке", "Тонке"];
  const boardName = ["Філадельфія", "Хот-Дог"];
  const sizesPriceCreate = [1, 1.1, 1.2];

  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem
    ? cartItem.reduce((sum, obj) => obj.count + sum, 0)
    : 0;

  const onChangeBoard = (i) => {
    category !== 5 && setBoardActive(i);
    if (i === boardActive) {
      setBoardActive(null);
    }
  };

  let boardPrice = 0;

  if (boardName[boardActive] === "Філадельфія") {
    boardPrice = 40;
  } else if (boardName[boardActive] === "Хот-Дог") {
    boardPrice = 30;
  }

  const customPrice =
    boardPrice +
    Number(
      sizeActive > 0 ? (price * sizesPriceCreate[sizeActive]).toFixed() : price
    );

  const item = {
    id,
    imageUrl,
    title,
    type: pizzaTypes[typeActive],
    size: sizes[sizeActive],
    board: boardName[boardActive],
    price: customPrice,
    count: 0,
    noAdd: noadd,
  };

  const onClickAdd = () => {
    dispatch(addItem(item));
  };

  const onClickPizza = () => {
    dispatch(setActivePizzaId(id));
    dispatch(setOpenPopup(true));
  };
  return (
    <S.Root categoryindex={category} page={page}>
      {/* <Link to={`/pizza/${id}`}> */}
      <S.Top onClick={onClickPizza}>
        <S.Image page={page}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://placehold.co/600x600?text=Loading..."
            }
            alt="pizza"
          />
        </S.Image>
        <S.Title page={page}>{title}</S.Title>
        <S.Subtitle page={page}>{subtitle}</S.Subtitle>
      </S.Top>
      {/* </Link> */}
      <S.Select>
        <ul>
          {types.map((type, index) => (
            <S.Type
              onClick={() => setTypeActive(index)}
              typeactive={typeActive}
              typeindex={index}
              key={type}
            >
              {pizzaTypes[type]}
            </S.Type>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <S.Size
              onClick={() => setSizeActive(i)}
              sizeactive={sizeActive}
              sizeindex={i}
              key={size}
            >
              {size} см.
            </S.Size>
          ))}
        </ul>
        <ul>
          {boardName.map((name, i) => (
            <S.Board
              onClick={() => onChangeBoard(i)}
              categoryindex={category}
              boardactive={boardActive}
              boardindex={i}
              key={name}
            >
              {name}
            </S.Board>
          ))}
        </ul>
        <S.Bottom>
          <S.Price>{customPrice} ₴</S.Price>
          <S.Btn onClick={onClickAdd}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>В кошик</span>
            {addedCount > 0 ? (
              <S.Count>
                <span>{addedCount}</span>
              </S.Count>
            ) : (
              ""
            )}
          </S.Btn>
        </S.Bottom>
      </S.Select>
    </S.Root>
  );
};

export default PizzaBlock;
