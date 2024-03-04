import styled from "styled-components";

export const SortRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  & div {
    position: relative;
  }

  & p {
    padding-right: 5px;
  }
  & span {
    color: ${(props) => props.theme.colors.btn};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ArrowBox = styled.div`
  position: relative;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 18px;
`;

export const Arrow = styled.img`
  position: absolute;
  top: 3px;
  width: 12px;
  cursor: pointer;
  transform: ${(props) => (props.arrow ? "rotate(180deg)" : "")};
  & g {
    & path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const SortPopup = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 25px;
  left: -5px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const PopupItem = styled.li`
  cursor: pointer;
  font-weight: ${(props) => (props.sortType === props.itemIndex ? 700 : 400)};
  &:hover {
    border-radius: 5px;
    text-decoration: underline;
  }
`;
