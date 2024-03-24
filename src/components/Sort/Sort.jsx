import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setSortType, setSortArrow } from "../../redux/slices/filterSlice";
import arrowImg from "./../../assets/img/arrow.svg";

const sortList = ["назвою", "ціною", "популярністю"];

const Sort = () => {
  const { sortType, sortArrow } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const sortRef = useRef();

  const [openPopup, setOpenPopup] = useState(false);
  const sortName = sortList[sortType];

  const onClickSortItem = (id) => {
    dispatch(setSortType(id));
    setOpenPopup(false);
  };
  const onChangeArrow = () => {
    dispatch(setSortArrow(!sortArrow));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpenPopup(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <S.SortRoot ref={sortRef}>
      <p>Сортувати за:</p>
      <div>
        <span onClick={() => setOpenPopup(!openPopup)}>{sortName}</span>
        {openPopup && (
          <S.SortPopup>
            {sortList.map((item, id) => (
              <S.PopupItem
                itemindex={id}
                sorttype={sortType}
                key={item}
                onClick={() => onClickSortItem(id)}
              >
                {item}
              </S.PopupItem>
            ))}
          </S.SortPopup>
        )}
      </div>
      <S.ArrowBox onClick={onChangeArrow}>
        <S.Arrow src={arrowImg} arrow={sortArrow.toString()} />
      </S.ArrowBox>
    </S.SortRoot>
  );
};

export default Sort;
