import styled from "styled-components";

export const CartRoot = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 50px auto;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;

  & svg {
    margin-right: 10px;
    & path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  & h4 {
    font-size: 24px;
  }
`;

export const Clear = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & svg {
    margin-right: 10px;
  }
  & span {
    font-size: 18px;
    color: ${(props) => props.theme.colors.secondary};
  }

  &:hover {
    & svg {
      & path {
        stroke: ${(props) => props.theme.colors.primary};
      }
    }
    & span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Body = styled.div`
  margin: 50px 0;
`;
export const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.secOpacity};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  gap: 20px;
  & img {
    max-width: 100px;
  }

  & svg {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 0px 20px 1px rgba(223, 230, 233, 1);
  }

  @media (max-width: 680px) {
    flex-wrap: wrap;
    padding: 10px;
    gap: 10px;
  }
`;

export const Descr = styled.div`
  width: 100%;
  max-width: 150px;

  @media (max-width: 440px) {
    width: 50%;
    max-width: none;
  }

  & h4 {
    font-size: 18px;
  }
  & span {
    display: block;
  }
`;

export const NoAdd = styled.span`
  text-decoration: line-through;
  width: 100%;
  max-width: 100px;
  @media (max-width: 440px) {
    width: 100%;
    max-width: none;
    text-align: end;
  }
`;

export const Count = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 30px;
  @media (max-width: 440px) {
    flex-grow: 1;
    width: 100%;
    justify-content: space-between;
  }
`;

export const CountWripper = styled.div`
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.colors.secOpacity};
  padding: 0 10px;
  border-radius: 10px;
  & svg {
    transform: scale(1.2);
  }
  & span {
    font-size: 18px;
    margin: 0 10px;
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const SvgMinus = styled.svg`
  & path {
    fill: ${(props) => (props.count > 1 ? props.theme.colors.primary : "")};
  }
`;
export const SvgPlus = styled.svg`
  & path {
    fill: ${(props) => props.theme.colors.btn};
  }
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
export const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  & svg {
    transform: rotate(-45deg) scale(1.5);
  }

  &:hover {
    & svg {
      & path {
        fill: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const Total = styled.div`
  & div {
    max-width: 200px;
    margin: 0 20px 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalCount = styled.div`
  & span {
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const TotalPrice = styled.div`
  & span {
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.colors.btn};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 30px;
  & div {
    width: 50%;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    & div {
      width: 100%;
    }
  }
`;

export const BtnBack = styled.button`
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  ${(props) => props.theme.btn};
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: ${(props) => props.theme.colors.primary};
  &:hover {
    color: #fff;
    border-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const BtnPay = styled.button`
  width: 50%;
  ${(props) => props.theme.btn};
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.btn};
  border-color: ${(props) => props.theme.colors.btn};

  &:hover {
    ${(props) => props.theme.colors.hover};
  }

  @media (max-width: 440px) {
    order: -1;
    width: 100%;
  }
`;

export const EmptyRoot = styled.div`
  margin: 30px 0;
  text-align: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  & img {
    width: 300px;
    @media (max-width: 480px) {
      width: 200px;
    }
  }
  & button {
    ${(props) => props.theme.btn}
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
    }
  }
`;
