import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import plant1 from "../../assets/plant_1.png";
import plant2 from "../../assets/plant_2.png";
import plant3 from "../../assets/plant_3.png";

const FooterContainer = styled.footer`
  background: var(--neutral-50);
  padding: 32px;
  margin-top: auto;
  background-clip: padding-box;
  position: relative;
  overflow: hidden;

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

const PlantIllustration = styled.img<{ position: "left" | "right" }>`
  position: absolute;
  bottom: -10px;
  ${({ position }) => (position === "left" ? "left: 0;" : "right: 0;")}
  height: 100%;
  width: auto;
  object-fit: contain;
  opacity: 0.8;
  pointer-events: none;
  z-index: 0;
`;

const MinorPlantIllustration = styled.img`
  position: absolute;
  bottom: -2px;
  left: 300px;
  height: 50%;
  width: auto;
  object-fit: contain;
  opacity: 0.8;
  pointer-events: none;
  z-index: 0;
  transform: scaleX(-1);
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  position: relative;
  z-index: 1;
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
  padding: 56px;
  margin-top: 32px;
  border-top: 1px solid rgba(113, 97, 239, 0.1);
  color: var(--light-text);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <PlantIllustration src={plant1} alt="Plant decoration" position="left" />
      <MinorPlantIllustration src={plant3} alt="Plant decoration" />
      <PlantIllustration src={plant2} alt="Plant decoration" position="right" />
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
    </FooterContainer>
  );
};

export default Footer;
