import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 280px;
  border-radius: 10px;
  /* border: 1px solid ${(props) => props.theme.colors.secondary}; */

  overflow: hidden;
  padding: 10px 10px 10px 10px;
  margin-top: 30px;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px 1px rgba(182, 182, 182, 1);
  }

  & div {
  }

  & ul {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    gap: 5px;
    user-select: none;

    & li {
      width: 100%;
      padding: 5px 10px;
      text-align: center;
      border: 1px solid ${(props) => props.theme.colors.secondary};
      border-radius: 20px;
      cursor: pointer;

      &:hover {
        border-color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const Image = styled.div`
  & img {
    width: 100%;
    object-fit: fill;
  }
`;

export const Title = styled.h4`
  font-size: 24px;
  margin: 10px 0 0 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  height: 4em;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const Type = styled.li`
  background-color: ${(props) =>
    props.typeActive === props.typeIndex && props.theme.colors.secondary};
`;
export const Size = styled.li`
  background-color: ${(props) =>
    props.sizeActive === props.sizeIndex && props.theme.colors.secondary};
`;
export const Board = styled.li`
  background-color: ${(props) =>
    props.boardActive === props.boardIndex && props.theme.colors.secondary};
`;

export const Bottom = styled.div`
  position: relative;
  height: 34px;
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.span`
  width: 100%;
  line-height: 1.5;
  padding: 5px 0 5px 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
`;

export const Btn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  right: 0;
  ${(props) => props.theme.btn}
  border: none;
  color: #fff;
  background-color: ${(props) => props.theme.colors.btn};

  cursor: pointer;

  & svg {
    margin-right: 5px;
  }

  &:hover {
    ${(props) => props.theme.colors.hover}
    box-shadow: 0px 0px 10px 2px rgba(45, 52, 54, 0.7);
  }
`;

export const Count = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  color: ${(props) => props.theme.colors.btn};
  background-color: #fff;
  border-radius: 50%;

  & span {
    font-size: 12px;
  }
`;
