import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { theme } from "./Theme";

const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
