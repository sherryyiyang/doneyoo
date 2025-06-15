import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: var(--neutral-50);
`;

export const HeroSection = styled.section`
  position: relative;
  padding: 60px 0;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: var(--neutral-900);
  margin-bottom: 24px;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: var(--neutral-600);
  margin-bottom: 32px;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FeaturesSection = styled.section`
  padding: 60px 0;
  background: var(--neutral-50);
`;

export const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  padding: 32px;
  background: var(--neutral-50);
  border-radius: 16px;
  text-align: center;
`;

export const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: var(--neutral-900);
  margin: 16px 0;
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  color: var(--neutral-600);
  line-height: 1.6;
`;

export const CTASection = styled.section`
  padding: 80px 0;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 1);
  margin: 32px 0;
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const CTASubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
  opacity: 0.9;
`;


export const Illustration = styled.img`
  position: relative;
  width: 100%;
  overflow: hidden;
`