import styled, { keyframes } from "styled-components";

const open = keyframes`
  0% { transform: scale(0.2, 0.2);
  opacity: 0.5 }
  
  100% { transform: scale(1, 1);
  opacity: 1 }
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  gap: 20px;

  margin-top: 100px;
  border-radius: 10px;
  z-index: 100;
`;

export const Close = styled.div`
  position: absolute;
  right: -30px;
  top: 0;
  z-index: 100;
  cursor: pointer;
`;

export const Card = styled.div`
  width: 30%;
`;

export const Content = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1;
  border-radius: 10px;
`;

export const Reviews = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
`;

export const Rating = styled.div`
  position: relative;
  display: flex;
`;
export const Stars = styled.div`
  margin-left: 10px;
  display: flex;

  & svg {
  }
`;

export const BlockInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
`;

export const Size = styled.div`
  width: 50%;
  padding-top: 20px;
  & ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    & li {
    }
    & li:after {
      content: "";
      position: absolute;
      bottom: 3px;
      left: 50%;
      transform: translateX(-50%);
      width: 11rem;
      height: 1px;
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Descr = styled.div`
  width: 50%;
  padding-top: 20px;

  & h3 {
    font-size: 36px;
  }

  & p {
    font-size: 16px;
    padding-top: 10px;
  }
`;

export const NoAdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-top: 40px;
  & h4 {
    font-size: 16px;
  }

  & input {
    position: relative;
    width: 70%;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
    &:focus {
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    }
  }

  & img {
    position: absolute;
    width: 16px;
    bottom: 18px;
    right: 14px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const Bonus = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
  gap: 20px;
`;

export const Delivery = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  & div {
    & img {
      width: 100px;
    }
  }
`;
export const Discount = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  & div {
  }
`;

// ======REVIEWS=======

export const RevRoot = styled.div`
  /* position: absolute; */
  flex-grow: 3;

  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.secOpacity};
  border-radius: 5px;

  & h4 {
    margin: 0 10px 5px 0;
  }
  & p {
  }
`;

export const List = styled.ul`
  cursor: auto;
  height: 90%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.secOpacity};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
  }
`;

export const Item = styled.li`
  font-size: 12px;
  background-color: ${(props) => props.theme.colors.secOpacity};
  margin: 0 5px 10px 0;
  padding: 5px;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const NoMessage = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Top = styled.div`
  display: flex;
  & ul {
    display: flex;
  }
  & li {
  }
  & span {
    margin-left: auto;
    font-size: 10px;
  }
`;

export const Form = styled.div`
  position: fixed;
  left: calc(50% - 250px);
  top: 30%;
  /* transform: translate(-50%, -50%); */
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 200;
  animation: ${open} 0.2s ease-in;

  & input {
    border: none;
    outline: none;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    &::placeholder {
      font-size: 12px;
    }
  }

  & textarea {
    resize: none;
    border: none;
    outline: none;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  color: #fff;
  border: none;
  padding: 9px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 4px 28px rgba(0, 0, 0, 0.5);
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const Title = styled.span``;
export const RevStars = styled.div`
  margin-left: 10px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  & span {
    cursor: pointer;
  }
`;
