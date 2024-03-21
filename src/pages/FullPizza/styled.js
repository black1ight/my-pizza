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

  margin-top: 50px;
  border-radius: 10px;
  z-index: 100;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const Close = styled.div`
  position: absolute;
  right: -30px;
  top: 0;
  z-index: 100;
  cursor: pointer;

  @media (max-width: 640px) {
    right: 0;
    top: -30px;
  }
`;

export const Card = styled.div`
  width: 30%;

  @media (max-width: 992px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const Content = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ecf0f1;
  border-radius: 10px;

  @media (max-width: 992px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 640px) {
    width: 100%;
    order: -1;
    padding: 10px;
  }
`;

export const Rating = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Reviews = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;

  & button {
    color: #fff;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    padding: 5px 20px;

    @media (max-width: 640px) {
      padding: 8px 20px;
    }

    &:hover {
      cursor: pointer;
    }

    & span {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid #ecf0f1;
      top: -8px;
      right: -8px;
      background-color: ${(props) => props.theme.colors.btn};
      font-size: 12px;
      line-height: 1;
    }
  }
`;

export const Stars = styled.div`
  margin-left: 10px;
  display: flex;

  & svg {
  }
`;

export const WrapperInfo = styled.div`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BlockInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 10px;
    align-items: start;
  }
`;

export const Size = styled.div`
  width: 50%;
  padding-top: 20px;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 300px;
    padding-top: 10px;
  }
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
      width: 50%;
      height: 1px;
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Descr = styled.div`
  width: 50%;
  padding-top: 20px;

  @media (max-width: 992px) {
    width: 100%;
  }

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

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 20px;
  }

  & h4 {
    font-size: 16px;
  }

  & input {
    position: relative;
    width: 70%;
    height: 2rem;
    font-size: 14px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
    &:focus {
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 992px) {
      width: 100%;
    }
    @media (max-width: 480px) {
      font-size: 16px;
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

  @media (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: start;
    font-size: 12px;
    margin-top: 20px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Delivery = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 992px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }

  & div {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      height: 60px;
    }
    & img {
      width: 60px;

      @media (max-width: 992px) {
        width: 40px;
      }
    }
  }
`;
export const Discount = styled.div`
  width: 33%;

  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 992px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
  & div {
    & svg {
      @media (max-width: 992px) {
        width: 40px;
      }
    }
  }
`;
export const Present = styled.div`
  width: 33%;

  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 992px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
  & div {
    & svg {
      @media (max-width: 992px) {
        width: 40px;
      }
    }
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

  @media (max-width: 640px) {
    height: 400px;
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

  @media (max-width: 640px) {
    font-size: 14px;
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

    @media (max-width: 640px) {
      font-size: 12px;
    }
  }
`;

export const Form = styled.div`
  position: fixed;
  left: calc(50% - 250px);
  top: 30%;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 200;
  animation: ${open} 0.2s ease-in;

  @media (max-width: 640px) {
    width: 90%;
    left: 5%;
  }

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
    @media (max-width: 640px) {
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
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
    @media (max-width: 640px) {
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
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

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (max-width: 640px) {
    padding: 5px 0;
  }
`;
export const Title = styled.span``;
export const RevStars = styled.div`
  margin-left: 10px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  & span {
    cursor: pointer;
    & svg {
      @media (max-width: 640px) {
        width: 24px;
      }
    }
  }
`;
