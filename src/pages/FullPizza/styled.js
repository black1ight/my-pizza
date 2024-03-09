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
  white-space: nowrap;
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
