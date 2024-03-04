import React from "react";
import styled from "styled-components";

const Link = styled.a`
  padding: 0 20px;
`;

const Navigation = () => {
  return (
    <div>
      <Link href="/">Про нас</Link>
      <Link href="/">Контакти</Link>
    </div>
  );
};

export default Navigation;
