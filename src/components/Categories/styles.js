import styled from "styled-components";

export const Root = styled.div`
  margin: 20px 0;
`;

// export const Root = styled.div`
//   position: absolute;
//   top: 140px;
//   left: 0;
// `;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  text-align: center;
  gap: 10px;
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
`;
