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
                itemIndex={id}
                sortType={sortType}
                key={id}
                onClick={() => onClickSortItem(id)}
              >
                {item}
              </S.PopupItem>
            ))}
          </S.SortPopup>
        )}
      </div>
      <S.ArrowBox onClick={onChangeArrow}>
        <S.Arrow src={arrowImg} arrow={sortArrow} />
        {/* <S.Arrow
          arrow={sortArrow}
          width="121"
          height="123"
          viewBox="0 0 121 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4_4)">
            <path
              d="M107.785 67.715C109.415 69.265 111.525 70.025 113.635 69.995C115.745 69.965 117.835 69.155 119.425 67.555L119.545 67.435C121.045 65.855 121.775 63.835 121.745 61.825C121.715 59.815 120.925 57.815 119.375 56.275C101.715 38.615 83.765 21.145 65.975 3.59499C65.925 3.52499 65.875 3.46499 65.815 3.40499C64.185 1.85499 62.055 1.09499 59.945 1.12498C57.835 1.15498 55.735 1.97499 54.145 3.57499L53.885 3.84499C36.345 21.315 18.745 38.765 1.23499 56.285C-0.305012 57.815 -1.09501 59.815 -1.12501 61.825C-1.15501 63.835 -0.425012 65.855 1.08499 67.435L1.23499 67.585C2.81499 69.155 4.89499 69.965 6.99499 69.995C9.09499 70.025 11.215 69.265 12.845 67.715L60.115 20.495L107.785 67.715ZM105.785 119.485C107.405 121.025 109.515 121.775 111.615 121.745C113.725 121.715 115.815 120.905 117.405 119.305L117.525 119.185C119.025 117.615 119.755 115.585 119.735 113.575C119.705 111.565 118.915 109.555 117.365 108.025C100.075 90.735 83.075 72.875 65.995 55.355C65.945 55.285 65.885 55.215 65.825 55.145C64.195 53.595 62.065 52.835 59.955 52.865C57.845 52.895 55.745 53.715 54.155 55.315C37.205 72.805 20.315 90.385 3.38499 107.915L3.25499 108.035C1.71499 109.565 0.934988 111.565 0.904988 113.575C0.874988 115.585 1.60499 117.605 3.10499 119.185L3.25499 119.335C4.83499 120.905 6.92499 121.715 9.01499 121.745C11.115 121.775 13.235 121.015 14.865 119.465L60.105 72.285L105.785 119.485Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_4">
              <rect width="120.64" height="122.88" fill="white" />
            </clipPath>
          </defs>
        </S.Arrow> */}
      </S.ArrowBox>
    </S.SortRoot>
  );
};

export default Sort;
