import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  setOpenAuthPopup,
  setOpenPageLock,
  setReview,
} from "../../redux/slices/pizzaSlise";
import * as S from "./styled";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { useAuth } from "../../hooks/use-auth";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ReviewsBlock = ({ reviews, id }) => {
  const { isAuth, email } = useAuth();

  const [inputValue, setInputValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [choiceStar, setChoiceStar] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    isAuth ? setInputValue(email.split("@", 1).join()) : setInputValue("");
  }, [isAuth]);

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
    dispatch(setOpenPageLock(false));
    setMessageValue("");
    setChoiceStar(0);
    setOpenForm(false);
  };

  const addReview = () => {
    if (isAuth) {
      setOpenForm(true);
      dispatch(setOpenPageLock(true));
    } else {
      dispatch(setOpenPageLock(true));
      dispatch(setOpenAuthPopup(true));
    }
  };

  const onCloseForm = () => {
    setOpenForm(false);
    dispatch(setOpenPageLock(false));
  };

  return (
    <S.RevRoot>
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
          <S.Close onClick={onCloseForm}>
            <IoIosCloseCircleOutline size="24px" color="#fff" />
          </S.Close>
          <input
            onChange={onChangeInput}
            value={inputValue}
            placeholder="Ім'я"
          />
          <textarea
            onChange={onChangeMessage}
            value={messageValue}
            rows="10"
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
          <S.Button onClick={sendReview}>Залишити відгук</S.Button>
        </S.Form>
      ) : (
        <S.Button onClick={() => addReview()}>Залишити відгук</S.Button>
      )}
    </S.RevRoot>
  );
};

export default ReviewsBlock;
