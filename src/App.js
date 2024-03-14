import React from "react";
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
  width: 1200px;
  padding: 30px;
  /* height: 90vh; */
  margin: 0 auto;
`;

function App() {
  const { openAuthPopup, openPageLock } = useSelector((state) => state.pizza);
  return (
    <ThemeProvider theme={theme}>
      {openPageLock && openAuthPopup && <Auth />}
      {openPageLock && <PageLock />}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
