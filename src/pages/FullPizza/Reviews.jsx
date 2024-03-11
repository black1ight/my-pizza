import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setReview } from "../../redux/slices/pizzaSlise";
import * as S from "./styled";
// import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const ReviewsBlock = ({ reviews, id }) => {
  const [inputValue, setInputValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [openForm, setOpenForm] = useState(false);
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
  };
  return (
    <Root>
      <List>
        {reviews.length > 0 &&
          reviews.map((item, id) => {
            return (
              <Item key={id}>
                <Top>
                  <h4>{item.name}</h4>
                  <ul>
                    {[...new Array(item.stars)].map((_, id) => (
                      <li key={id}>
                        <FaStar />
                      </li>
                    ))}
                  </ul>
                  <span>{item.date}</span>
                </Top>
                <p>{item.message}</p>
              </Item>
            );
          })}
      </List>
      {openForm ? (
        <Form>
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
          <Bottom>
            <Title>Оберіть зірочку:</Title>
            <Stars>
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
            </Stars>
          </Bottom>
          <button onClick={sendReview}>Залишити відгук</button>
        </Form>
      ) : (
        <Form>
          <button onClick={() => setOpenForm(true)}>Залишити відгук</button>
        </Form>
      )}
    </Root>
  );
};

export default ReviewsBlock;
