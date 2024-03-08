import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.page === "fullPizza" ? "row" : "column")};
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.page !== "fullPizza" && "1px solid rgba(182, 182, 182, 0.5)"};

  overflow: hidden;
  padding: 10px 10px 10px 10px;
  margin-top: ${(props) => (props.page === "fullPizza" ? "0" : "30px")};

  transition: all 0.1s linear;

  &:hover {
    transform: ${(props) => props.page !== "fullPizza"} && "scale(1.02)";
    box-shadow: ${(props) => props.page !== "fullPizza"} &&
      "0px 4px 28px rgba(0, 0, 0, 0.2)";
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

export const Top = styled.div`
  width: 100%;
`;

export const Image = styled.div`
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h4`
  display: ${(props) => (props.page === "fullPizza" ? "none" : "block")};
  font-size: 24px;
  /* margin: 10px 0 0 0; */
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
  display: ${(props) => (props.page === "fullPizza" ? "none" : "-webkit-box")};
`;

export const Select = styled.div`
  width: 100%;
`;

export const Type = styled.li`
  background-color: ${(props) =>
    props.typeactive === props.typeindex && props.theme.colors.secOpacity};
`;
export const Size = styled.li`
  background-color: ${(props) =>
    props.sizeactive === props.sizeindex && props.theme.colors.secOpacity};
`;
export const Board = styled.li`
  background-color: ${(props) =>
    props.boardactive === props.boardindex && props.theme.colors.secOpacity};
  opacity: ${(props) => (props.categoryindex !== 5 ? 1 : 0.5)};
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
  width: 70%;
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
