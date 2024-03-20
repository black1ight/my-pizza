import styled from "styled-components";

export const Root = styled.div`
  margin: 20px 0;
  @media (max-width: 540px) {
    margin: 10px 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
    overflow-x: scroll;
    margin: 0 auto;
    padding: 10px 0;
  }
  @media (max-width: 540px) {
    justify-content: start;
  }
`;

export const ListItem = styled.li`
  padding: 5px 20px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  background-color: ${(props) =>
    props.categoryindex === props.listitemindex
      ? props.theme.colors.primary
      : ""};
  color: ${(props) =>
    props.categoryindex === props.listitemindex
      ? "#fff"
      : props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
  }
  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;
