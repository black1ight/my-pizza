import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 30px;
`;

export const Logo = styled.img`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 140px;
`;

export const AuthBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.items.length > 0
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  border-radius: 10px;
  padding: 5px 15px;

  & svg {
    padding-right: 5px;
  }

  & span {
    color: white;
  }

  &:hover {
    cursor: pointer;
  }
`;
export const Count = styled.span`
  color: #fff;
  text-align: center;
  position: absolute;
  padding: 2px 8px;
  border-radius: 50%;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme.colors.btn};
`;
export const TotalPrice = styled.span``;
