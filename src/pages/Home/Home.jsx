import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import PizzaBlock from "../../components/Pizzas/PizzaBlock";
import Sort from "../../components/Sort/Sort";
import styled from "styled-components";
import Skeleton from "../../components/Pizzas/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../redux/slices/pizzaSlise";

const sortList = ["title", "price", "rating"];

const Root = styled.div``;

const ContentItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  overflow: hidden;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Home = ({ scroll }) => {
  const { items, status } = useSelector((state) => state.pizza);

  const dispatch = useDispatch();

  const { searchValue, categoryId, sortType, sortArrow } = useSelector(
    (state) => state.filter
  );

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const arrow = sortArrow ? "order=asc" : "order=desc";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        category,
        arrow,
        search,
        sortList,
        sortType,
      })
    );
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, sortArrow, searchValue]);

  return (
    <Root>
      <Header scroll={scroll} />
      <Categories />
      <Sort />
      <ContentItems>
        {status === "loading"
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj, index) => <PizzaBlock {...obj} key={obj.title} />)}
      </ContentItems>
    </Root>
  );
};

export default Home;
