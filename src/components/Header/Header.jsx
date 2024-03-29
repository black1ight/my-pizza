import Navigation from "../Navigation/Navigation";
import * as S from "./styles";
import Search from "../Search/Search";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./../../assets/img/logo-pacman-primary.svg";
import { TbLogin2, TbLogout2 } from "react-icons/tb";
import {
  setOpenAuthPopup,
  setOpenPageLock,
} from "../../redux/slices/pizzaSlise";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../redux/slices/userSlice";
import { useRef } from "react";

const Header = ({ scroll }) => {
  const { pathname } = useLocation();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const headerRef = useRef();

  return (
    <S.Root ref={headerRef} position={scroll >= 66 ? "fixed" : "static"}>
      <S.Container>
        <Link to="/">
          <S.Logo src={Logo} alt="logo" />
        </Link>
        {pathname !== "/cart" && <Search />}
        <Navigation />
        <S.AuthBtn
          onClick={() => {
            if (isAuth) {
              if (window.confirm("Ви дійсно бажаєте вийти?")) {
                dispatch(removeUser());
              }
            } else {
              dispatch(setOpenPageLock(true));
              dispatch(setOpenAuthPopup(true));
            }
          }}
        >
          <S.Email>{isAuth && email}</S.Email>
          {isAuth ? <TbLogout2 size="24px" /> : <TbLogin2 size="24px" />}
        </S.AuthBtn>
        <Link to="/cart">
          <S.CartBtn items={items}>
            <svg width="33" height="33" viewBox="0 0 33 26" fill="none">
              <path
                d="M27.562 4.763a1.96 1.96 0 00-1.531-.732H4.689l-.19-1.366A1.977 1.977 0 002.548.97H.874a.875.875 0 000 1.75h1.673a.22.22 0 01.217.188l2.362 16.928a1.977 1.977 0 001.95 1.696h.948a2.628 2.628 0 002.475 3.5 2.628 2.628 0 002.474-3.5h4.676a2.628 2.628 0 002.474 3.5 2.628 2.628 0 002.475-3.5h1.9a.875.875 0 000-1.75H7.078a.22.22 0 01-.217-.188l-.218-1.562h17.232a1.98 1.98 0 001.925-1.556l2.157-10.062a1.96 1.96 0 00-.394-1.65zM11.375 22.406a.876.876 0 01-1.75 0 .876.876 0 011.75 0zm9.625 0a.876.876 0 01-1.75 0 .876.876 0 011.75 0zm5.245-16.36l-2.157 10.062a.22.22 0 01-.214.173H6.398l-1.465-10.5H26.03c.086 0 .14.044.17.081.03.038.062.1.044.184z"
                fill="#fff"
              ></path>
            </svg>
            {items.length > 0 && (
              <S.Count>
                <span>
                  {items.reduce((sum, obj) => {
                    return obj.count + sum;
                  }, 0)}
                </span>
              </S.Count>
            )}
            <S.TotalPrice>{totalPrice} ₴</S.TotalPrice>
          </S.CartBtn>
        </Link>
      </S.Container>
    </S.Root>
  );
};

export default Header;
