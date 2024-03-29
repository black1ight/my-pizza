import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { theme } from "./Theme";
import FullPizza from "./pages/FullPizza/FullPizza";
import PageLock from "./components/PageLock";
import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  max-width: 1200px;
  padding: 15px;
  /* height: 90vh; */
  margin: 0 auto;

  @media (max-width: 540px) {
    border-radius: 0;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

function App() {
  const { openAuthPopup, openPageLock } = useSelector((state) => state.pizza);

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <ThemeProvider theme={theme}>
      {openPageLock && openAuthPopup && <Auth />}
      {openPageLock && <PageLock />}
      <Container>
        <Routes>
          <Route path="/" element={<Home scroll={scroll} />} />
          <Route path="/pizza/:id" element={<FullPizza scroll={scroll} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
