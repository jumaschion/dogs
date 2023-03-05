import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;

export const Login = styled(Link)`
  color: var(--color-almost-black);
  align-items: center;
  display: flex;
  gap: 0.5rem;

  .img {
    margin-top: -4px;
  }
`;
