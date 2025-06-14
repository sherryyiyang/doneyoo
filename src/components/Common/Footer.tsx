import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background: var(--neutral-50);
  padding: 32px;
  margin-top: auto;
  background-clip: padding-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  background: var(--dark-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterLink = styled.a`
  color: var(--dark-text);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--dark-text);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(113, 97, 239, 0.1);
  color: var(--light-text);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Doneyoo</FooterTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Product</FooterTitle>
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">Support</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink href="#">Documentation</FooterLink>
          <FooterLink href="#">Guides</FooterLink>
          <FooterLink href="#">API Reference</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Doneyoo. All rights reserved.
      </Copyright>
      <div style={{ marginTop: "32px" }} />
    </FooterContainer>
  );
};

export default Footer;
