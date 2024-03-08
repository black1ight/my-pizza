import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { theme } from "./Theme";
import FullPizza from "./pages/FullPizza/FullPizza";

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 1200px;
  /* height: 90vh; */
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
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
