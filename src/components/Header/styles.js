import styled, { keyframes } from "styled-components";

const headerFixed = keyframes`
  0% { transform: translate(-15px,-200%);}
  
  100% { transform: translate(-15px,0%);}
`;
const headerFixedSmall = keyframes`
  0% { transform: translateY(-200%);}
  
  100% { transform: translateY(0%);}
`;

export const Root = styled.div`
  position: ${(props) => props.position};
  top: 0;
  width: 100%;
  ${(props) =>
    props.position === "fixed" ? "max-width: 1200px" : "max-width: 1170px"};
  ${(props) => props.position === "fixed" && "transform: translateX(-15px)"};
  ${(props) => props.position === "fixed" && "padding: 0 15px"};
  ${(props) =>
    props.position === "fixed" && "box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)"};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 100;

  animation: ${(props) => props.position === "fixed" && headerFixed} 1s ease-in;

  @media (max-width: 1280px) {
    max-width: calc(100% - 60px);
  }
  @media (max-width: 992px) {
    max-width: calc(100% - 30px);
  }
  @media (max-width: 768px) {
    max-width: calc(100% - 20px);
  }
  @media (max-width: 540px) {
    max-width: none;
    left: 0;
    right: 0;
    transform: none;
    animation: ${(props) => props.position === "fixed" && headerFixedSmall} 1s
      ease-in;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 992px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
    padding: 10px 0;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 80px;
  @media (max-width: 480px) {
    width: 60px;
  }
`;

export const AuthBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    flex-shrink: 0;
  }
  @media (max-width: 992px) {
    max-width: 15%;
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
    max-width: 30%;
  }
`;

export const Email = styled.span`
  display: block;
  @media (max-width: 992px) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CartBtn = styled.div`
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

  @media (max-width: 480px) {
    padding: 5px 10px;
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
  @media (max-width: 480px) {
    top: 0;
    right: -8px;
  }
`;
export const TotalPrice = styled.span``;
