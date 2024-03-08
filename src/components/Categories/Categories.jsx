import { setCategoryIndex } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styles";
import styled from "styled-components";

const categories = [
  "Всі",
  "М'ясні",
  "Вегетаріанські",
  "Гриль",
  "Гострі",
  "Закриті",
];

const Categories = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryIndex(id));
  };
  return (
    <S.Root>
      <S.List>
        {categories.map((name, id) => (
          <S.ListItem
            key={name}
            categoryindex={categoryId}
            listitemindex={id}
            onClick={() => {
              onChangeCategory(id);
            }}
          >
            {name}
          </S.ListItem>
        ))}
      </S.List>
    </S.Root>
  );
};

export default Categories;
