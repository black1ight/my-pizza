import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  width: 100%;
  max-width: 600px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #fff;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff; */
  margin-top: 50px;
  /* overflow: hidden; */
  border-radius: 10px;
  /* padding: 10px; */
  z-index: 100;
`;

export const Close = styled.div`
  position: absolute;
  right: -30px;
  z-index: 100;
  cursor: pointer;
`;

export const Card = styled.div`
  width: 50%;
`;

export const Content = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgba(182, 182, 182, 0.2);
  border-radius: 0 10px 10px 0;
`;

export const Reviews = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
`;

export const Rating = styled.div`
  display: flex;
`;
export const Stars = styled.div`
  margin-left: 10px;
  display: flex;

  & svg {
  }
`;
export const Size = styled.div`
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
  flex-grow: 2;
  padding-top: 20px;
  & h3 {
    font-size: 24px;
  }

  & p {
    padding-top: 10px;
  }
`;

export const NoAdd = styled.div`
  padding-top: 20px;
  & h4 {
    font-size: 16px;
    padding-bottom: 10px;
  }

  & input {
    position: relative;
    width: 100%;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    outline: none;
    margin-top: auto;
    padding: 0 10px;
    &:focus {
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
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

// ======REVIEWS=======

export const RevRoot = styled.div`
  position: absolute;

  width: 50%;
  height: calc(100% - 40px);
  padding: 10px;
  margin-top: 10px;
  top: 30px;
  right: 0;
  z-index: 200;
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
  height: 220px;
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
  position: absolute;
  width: 100%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
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
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.secOpacity};
  border-radius: 0 0 5px 0;

  & input {
    border: none;
    outline: none;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    &::placeholder {
      font-size: 12px;
    }
  }

  & textarea {
    resize: none;
    border: none;
    outline: none;
    margin-bottom: 10px;
    padding: 5px;

    border-radius: 5px;
    &::placeholder {
      font-size: 12px;
    }
  }

  & button {
    color: #fff;
    border: none;
    padding: 9px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 4px 28px rgba(0, 0, 0, 0.5);
    }
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
