import { setSearchValue } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CloseIcon from "./../../assets/img/close.svg";
import React, { useRef, useCallback, useState } from "react";

const Root = styled.div`
  position: relative;

  @media (max-width: 480px) {
    order: 4;
    width: 100%;
  }
`;

const Input = styled.input`
  border: 1px solid;
  border-radius: 10px;
  padding: 8px 10px 8px 30px;
  border-color: ${(props) => props.theme.colors.secondary};

  &::placeholder {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:focus {
    border: 1px solid;
    color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }

  @media (max-width: 992px) {
    max-width: 150px;
  }

  @media (max-width: 480px) {
    max-width: unset;
    width: 100%;
  }
`;

const Svg = styled.svg`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  fill: ${(props) => props.theme.colors.secondary};
`;

const Close = styled.img`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  padding: 3px;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setInputValue("");
    dispatch(setSearchValue(""));
    inputRef.current.focus();
  };
  return (
    <Root>
      <Input
        ref={inputRef}
        onChange={onChangeInput}
        value={inputValue}
        placeholder="пошук..."
      />
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
      </Svg>
      {searchValue && (
        <Close onClick={onClickClear} src={CloseIcon} alt="close" />
      )}
    </Root>
  );
};

export default Search;
