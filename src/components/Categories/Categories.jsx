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

const ListItem = styled.li`
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  background-color: ${(props) =>
    props.categoryId === props.listItemIndex ? props.theme.colors.primary : ""};
  color: ${(props) =>
    props.categoryId === props.listItemIndex
      ? "#fff"
      : props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
  }
`;

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
          <ListItem
            key={name}
            categoryId={categoryId}
            listItemIndex={id}
            onClick={() => {
              onChangeCategory(id);
            }}
          >
            {name}
          </ListItem>
        ))}
      </S.List>
    </S.Root>
  );
};

export default Categories;
