import React from "react";
import { ReactComponent as Dogs } from "../assets/dogs.svg";
import { ReactComponent as User } from "../assets/usuario.svg";
import { Login, Logo, Nav, StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Nav className="container">
        <Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </Logo>
        <Login to="/login">
          Login / Criar
          <User className="img" />
        </Login>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
