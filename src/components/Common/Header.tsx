import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: var(--gradient-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #2563eb;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  color: ${({ active }) => (active ? "var(--gradient-primary)" : "#4b5563")};
  font-weight: ${({ active }) => (active ? "600" : "500")};
  padding: 8px 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--gradient-primary);
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    color: var(--gradient-primary);
    &:after {
      transform: scaleX(1);
    }
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
      <HeaderContent>
        <Logo to="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 2V5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M3 8H21" stroke="currentColor" strokeWidth="2" />
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          Doneyoo
        </Logo>
        <Nav>
          <NavLink to="/features" active={location.pathname === "/features"}>
            Features
          </NavLink>
          <NavLink to="/pricing" active={location.pathname === "/pricing"}>
            Pricing
          </NavLink>
          <NavLink to="/about" active={location.pathname === "/about"}>
            About
          </NavLink>
        </Nav>
        <ButtonGroup>
          {isAuthenticated ? (
            <>
              <Button variant="outline" as={Link} to="/dashboard">
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
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
