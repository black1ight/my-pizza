import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { setActiveItem, setOpenPopup } from "../../redux/slices/pizzaSlise";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";
import Close from "../../assets/img/close.svg";

import PizzaBlock from "../../components/Pizzas/PizzaBlock";
import ReviewsBlock from "./Reviews";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

const weight = [300, 400, 700];

const FullPizza = ({ id }) => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [openReviews, setOpenReviews] = useState(false);
  const inputRef = useRef();

  const pizza = useSelector((state) =>
    state.pizza.activeItem.find((obj) => obj.id === id)
  );

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63f67ab959c944921f74dd84.mockapi.io/pizza`
        );
        dispatch(setActiveItem(data));
      } catch {
        alert("Помилка при отриманні піцц");
        navigate("/");
      }
    }

    fetchPizza();
  }, [navigate, dispatch, id]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const onClickClear = () => {
    setInputValue("");
    inputRef.current.focus();
  };

  // const starIcon = () => {

  // }

  if (!pizza) {
    return "Loading...";
  }
  return (
    <S.Root>
      <S.Close onClick={() => dispatch(setOpenPopup(false))}>
        <IoIosCloseCircleOutline size="24px" color="#fff" />
      </S.Close>
      <S.Card>
        <PizzaBlock noadd={inputValue} {...pizza} page="fullPizza" />
      </S.Card>
      <S.Content>
        <S.Rating>
          <S.Reviews onClick={() => setOpenReviews(!openReviews)}>
            <span>Відгуки: (0)</span>
            {openReviews && <ReviewsBlock />}
          </S.Reviews>
          <S.Stars>
            <span>
              {pizza.rating >= 1 ? (
                <FaStar color="rgb(255, 187, 0)" />
              ) : (
                <FaRegStar color="rgb(255, 187, 0)" />
              )}
            </span>
            <span>
              {pizza.rating >= 2 ? (
                <FaStar color="rgb(255, 187, 0)" />
              ) : (
                <FaRegStar color="rgb(255, 187, 0)" />
              )}
            </span>
            <span>
              {pizza.rating >= 3 ? (
                <FaStar color="rgb(255, 187, 0)" />
              ) : (
                <FaRegStar color="rgb(255, 187, 0)" />
              )}
            </span>
            <span>
              {pizza.rating >= 4 ? (
                <FaStar color="rgb(255, 187, 0)" />
              ) : (
                <FaRegStar color="rgb(255, 187, 0)" />
              )}
            </span>
            <span>
              {pizza.rating >= 5 ? (
                <FaStar color="rgb(255, 187, 0)" />
              ) : (
                <FaRegStar color="rgb(255, 187, 0)" />
              )}
            </span>
          </S.Stars>
        </S.Rating>
        <S.Size>
          {pizza.sizes.map((item, id) => (
            <ul>
              <li key={item}>Ø {item}см.</li>
              <span>~ {weight[id]} г</span>
            </ul>
          ))}
        </S.Size>
        <S.Descr>
          <h3>{pizza.title}</h3>
          <p>{pizza.subtitle}</p>
        </S.Descr>
        <S.NoAdd>
          <h4>Не додавати:</h4>
          <input
            ref={inputRef}
            value={inputValue}
            placeholder="не додавати..."
            onChange={onChangeInput}
          />
          {inputValue && <img onClick={onClickClear} src={Close} alt="close" />}
        </S.NoAdd>
      </S.Content>
    </S.Root>
  );
};

export default FullPizza;
