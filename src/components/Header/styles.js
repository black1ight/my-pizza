import styled from "styled-components";

export const Root = styled.div`
  position: ${(props) => props.position};
  top: 0;
  width: 100%;
  max-width: 1170px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  /* box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5); */
  z-index: 200;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
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
  top: 50%;
  transform: translateY(-50%);
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
  /* text-align: center; */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  /* padding: 2px 8px; */
  border-radius: 50%;
  border: 2px solid #fff;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme.colors.btn};
  & span {
    font-size: 12px;
    line-height: 1;
  }
`;
export const TotalPrice = styled.span``;
