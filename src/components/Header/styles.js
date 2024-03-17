import styled, { keyframes } from "styled-components";

const headerFixed = keyframes`
  0% { transform: translate(-15px,-200%);}
  
  100% { transform: translate(-15px,0%);}
`;

export const Root = styled.div`
  position: ${(props) => props.position};
  top: 0;
  width: 100%;
  ${(props) =>
    props.position === "fixed" ? "max-width: 1200px" : "max-width: 1170px"};
  ${(props) => props.position === "fixed" && "transform: translateX(-15px)"};
  ${(props) => props.position === "fixed" && "padding: 0 15px"};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 100;

  animation: ${(props) => props.position === "fixed" && headerFixed} 1s ease-in;
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
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
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
