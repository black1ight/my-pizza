import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setReview } from "../../redux/slices/pizzaSlise";
import * as S from "./styled";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { useAuth } from "../../hooks/use-auth";
import Auth from "../../components/Auth/Auth";

const ReviewsBlock = ({ reviews, id }) => {
  const { isAuth, email } = useAuth();

  const [inputValue, setInputValue] = useState(
    isAuth ? email.split("@", 1).join() : ""
  );
  const [messageValue, setMessageValue] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [choiceStar, setChoiceStar] = useState(null);

  const dispatch = useDispatch();

  const newReview = {
    id: id,
    name: inputValue,
    message: messageValue,
    stars: choiceStar,
    date: new Date().toLocaleDateString(),
  };

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  const onChangeMessage = (event) => {
    setMessageValue(event.target.value);
  };

  const sendReview = () => {
    dispatch(setReview(newReview));
    setOpenForm(false);
    setChoiceStar(0);
  };

  const addReview = () => {
    if (isAuth) {
      setOpenForm(true);
    }
    setShowAuthForm(true);
  };

  return (
    <S.RevRoot>
      {showAuthForm && <Auth />}
      <S.List>
        {reviews.length > 0 ? (
          reviews.map((item, id) => {
            return (
              <S.Item key={id}>
                <S.Top>
                  <h4>{item.name}</h4>
                  <ul>
                    {[...new Array(item.stars)].map((_, id) => (
                      <li key={id}>
                        <FaStar />
                      </li>
                    ))}
                  </ul>
                  <span>{item.date}</span>
                </S.Top>
                <p>{item.message}</p>
              </S.Item>
            );
          })
        ) : (
          <S.NoMessage>
            <span>
              <MdOutlineMessage size="84px" color="grey" opacity="0.2" />
            </span>
          </S.NoMessage>
        )}
      </S.List>
      {openForm ? (
        <S.Form>
          <input
            onChange={onChangeInput}
            value={inputValue}
            placeholder="Ім'я"
          />
          <textarea
            onChange={onChangeMessage}
            value={messageValue}
            rows="5"
            placeholder="Відгук"
          />
          <S.Bottom>
            <S.Title>Оберіть зірочку:</S.Title>
            <S.RevStars>
              <span onClick={() => setChoiceStar(1)}>
                {choiceStar >= 1 ? <FaStar /> : <FaRegStar />}
              </span>
              <span onClick={() => setChoiceStar(2)}>
                {choiceStar >= 2 ? <FaStar /> : <FaRegStar />}
              </span>
              <span onClick={() => setChoiceStar(3)}>
                {choiceStar >= 3 ? <FaStar /> : <FaRegStar />}
              </span>
              <span onClick={() => setChoiceStar(4)}>
                {choiceStar >= 4 ? <FaStar /> : <FaRegStar />}
              </span>
              <span onClick={() => setChoiceStar(5)}>
                {choiceStar >= 5 ? <FaStar /> : <FaRegStar />}
              </span>
            </S.RevStars>
          </S.Bottom>
          <button onClick={sendReview}>Залишити відгук</button>
        </S.Form>
      ) : (
        <S.Form>
          <button onClick={() => addReview()}>Залишити відгук</button>
        </S.Form>
      )}
    </S.RevRoot>
  );
};

export default ReviewsBlock;
