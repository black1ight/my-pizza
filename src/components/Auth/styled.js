import styled, { keyframes } from "styled-components";

const open = keyframes`
  0% { transform: scale(0.2, 0.2);
  opacity: 0.5 }
  
  100% { transform: scale(1, 1);
  opacity: 1 }
`;

export const Root = styled.div`
  position: fixed;
  top: calc(50% - (150px));
  left: calc(50% - (150px));
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isAuth ? "center" : "end")};
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #fff;
  background: rgb(255, 255, 255);
  z-index: 300;
  animation: ${open} 0.2s ease-out;
`;

export const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: -30px;
  top: 0;
`;
export const Form = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  & input,
  & button {
    font-size: 16px;
    padding: 10px 10px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  & input {
    background-color: #fff;
    border-bottom: 1px solid #000;
  }
`;

export const Btn = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  & button {
    border-radius: 10px;

    width: ${(props) => (props.isAuth ? "100%" : "50%")};
    background-color: ${(props) => props.theme.colors.primary};
    /* border: 1px solid ${(props) => props.theme.colors.primary}; */
    color: #fff;

    &:last-child {
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.secOpacity};
    }
  }
`;

export const Title = styled.div`
  font-size: 48px;
  text-align: center;
`;
