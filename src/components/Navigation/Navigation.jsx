import React from "react";
import styled from "styled-components";

const List = styled.ul`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  padding: 0 20px;
`;

const Navigation = () => {
  return (
    <List>
      <Link href="/">Про нас</Link>
      <Link href="/">Контакти</Link>
    </List>
  );
};

export default Navigation;
