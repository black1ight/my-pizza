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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  & img {
    max-width: 100px;
  }

  & svg {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 0px 20px 1px rgba(223, 230, 233, 1);
  }
`;

export const Descr = styled.div`
  width: 100%;
  max-width: 200px;
  & h4 {
    font-size: 18px;
  }
  & span {
    display: block;
  }
`;
export const Count = styled.div`
  & svg {
    transform: scale(1.2);
  }
  & span {
    font-size: 18px;
    margin: 0 10px;
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
`;

export const BtnBack = styled.button`
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
  }
  & button {
    ${(props) => props.theme.btn}
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
    }
  }
`;
