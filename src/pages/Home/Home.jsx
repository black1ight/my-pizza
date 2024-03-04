import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import PizzaBlock from "../../components/Pizzas/PizzaBlock";
import Sort from "../../components/Sort/Sort";
import styled from "styled-components";
import Skeleton from "../../components/Pizzas/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../redux/slices/pizzaSlise";

const sortList = ["title", "price", "rating"];

const ContentItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

const Home = () => {
  const { items, status } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  const { searchValue, categoryId, sortType, sortArrow } = useSelector(
    (state) => state.filter
  );

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const arrow = sortArrow ? "order=desc" : "order=asc";
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
    <>
      <Header />
      <Categories />
      <Sort />
      <ContentItems>
        {status === "loading"
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj, index) => <PizzaBlock {...obj} key={obj.title} />)}
      </ContentItems>
    </>
  );
};

export default Home;
