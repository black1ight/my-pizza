import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { setActiveItem } from "../../redux/slices/pizzaSlise";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";
import Close from "../../assets/img/close.svg";
import DeliveryIcon from "../../assets/img/delivery-icon.png";

import PizzaBlock from "../../components/Pizzas/PizzaBlock";
import ReviewsBlock from "./Reviews";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";
import Header from "../../components/Header/Header";

const weight = [300, 400, 700];

const FullPizza = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [openReviews, setOpenReviews] = useState(false);
  const inputRef = useRef();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63f67ab959c944921f74dd84.mockapi.io/pizza`
        );
        const activePizza = data.filter((obj) => obj.id === +id);
        dispatch(setActiveItem(activePizza));
      } catch {
        alert("Помилка при отриманні піцц");
        navigate("/");
      }
    }

    fetchPizza();
  }, [navigate, dispatch, id]);

  const pizza = useSelector((state) => state.pizza.activeItem[0]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const onClickClear = () => {
    setInputValue("");
    inputRef.current.focus();
  };

  if (!pizza) {
    console.log(id);
    return "Loading...";
  }
  return (
    <div>
      <Header />
      <S.Root>
        <S.Card>
          <PizzaBlock noadd={inputValue} {...pizza} page="fullPizza" />
        </S.Card>
        <S.Content>
          <S.Rating>
            <S.Reviews onClick={() => setOpenReviews(!openReviews)}>
              <span>Відгуки: ({pizza.reviews.length})</span>
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
          {openReviews ? (
            <ReviewsBlock {...pizza} />
          ) : (
            <div>
              {" "}
              <S.BlockInfo>
                <S.Descr>
                  <h3>{pizza.title}</h3>
                  <p>{pizza.subtitle}</p>
                </S.Descr>
                <S.Size>
                  {pizza.sizes.map((item, id) => (
                    <ul>
                      <li key={item}>Ø {item}см.</li>
                      <span>~ {weight[id]} г</span>
                    </ul>
                  ))}
                </S.Size>
              </S.BlockInfo>
              {/* <S.Option>
                <img src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fsous-domynos.webp&w=256&q=75" />
                <img src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fchesnochnyi.webp&w=256&q=75" />
                <img src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Falfredo.webp&w=256&q=75" />
                <img src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fsous-bbk.webp&w=256&q=75" />
              </S.Option> */}
              <S.NoAdd>
                <h4>Не додавати:</h4>
                <input
                  ref={inputRef}
                  value={inputValue}
                  placeholder="не додавати..."
                  onChange={onChangeInput}
                />
                {inputValue && (
                  <img onClick={onClickClear} src={Close} alt="close" />
                )}
              </S.NoAdd>
              <S.Delivery>
                <div>
                  <img src={DeliveryIcon} alt="delivery" />
                </div>
                Безкоштовна доставка при замовленні від 750 грн
              </S.Delivery>
              <S.Discount>
                <div>
                  <CiDiscount1 size="32px" />
                </div>
                Знижка 10% при отриманні замовлення в закладі
              </S.Discount>
            </div>
          )}
        </S.Content>
      </S.Root>
    </div>
  );
};

export default FullPizza;
