import React, { useEffect } from "react";
import styled from "styled-components";
const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  overflow: hidden;
`;
const PageLock = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  });
  return <Root></Root>;
};

export default PageLock;
