import React, { useEffect } from "react";
import styled from "styled-components";
const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
  overflow: hidden;
`;
const PageLock = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  });
  return <Root></Root>;
};

export default PageLock;
