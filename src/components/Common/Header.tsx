import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import donyooLogo from "../../assets/doneyoo_logo.png";

const HeaderContainer = styled.header`
  background: var(--neutral-50);
  padding: 16px 32px;
  background-clip: padding-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: -1px;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: var(--neutral-50);
  }
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  background: var(--dark-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  color: ${({ active }) =>
    active ? "var( --dark-text)" : "var( --dark-text)"};
  font-weight: ${({ active }) => (active ? "600" : "400")};
  transition: color 0.2s;

  &:hover {
    color: var(--dark-text);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Header: React.FC = () => {
  const location = useLocation();
  const isAuthenticated = true; // TODO: Replace with actual auth state

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <LogoImage src={donyooLogo} alt="Doneyoo Logo" />
          Doneyoo
        </Logo>
        <NavLinks>
          <NavLink to="/" active={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/dashboard" active={location.pathname === "/dashboard"}>
            Demo
          </NavLink>
        </NavLinks>
        <ButtonGroup>
          {isAuthenticated ? (
            <>
              <Button variant="outline" to="/dashboard">
                Dashboard
              </Button>
              <Button variant="secondary">Log Out</Button>
            </>
          ) : (
            <>
              <Button variant="outline" as={Link} to="/login">
                Log In
              </Button>
              <Button as={Link} to="/signup">
                Sign Up
              </Button>
            </>
          )}
        </ButtonGroup>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
