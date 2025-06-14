import React from "react";
import styled from "styled-components";
import Button from "../../components/Common/Button";
import Illustration from "../../components/Common/Illustration";

const Container = styled.div`
  min-height: 100vh;
  background: var(--neutral-50);
`;

const HeroSection = styled.section`
  position: relative;
  padding: 120px 0;
  overflow: hidden;
`;

const Content = styled.div`
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

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: var(--neutral-900);
  margin-bottom: 24px;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: var(--neutral-600);
  margin-bottom: 32px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FeaturesSection = styled.section`
  padding: 120px 0;
  background: var(--neutral-50);
`;

const FeaturesGrid = styled.div`
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

const FeatureCard = styled.div`
  padding: 32px;
  background: var(--neutral-50);
  border-radius: 16px;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: var(--neutral-900);
  margin: 16px 0;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: var(--neutral-600);
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 120px 0;
  background: var(--gradient-primary);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const CTASubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
  opacity: 0.9;
`;

const LandingPage: React.FC = () => {
  return (
    <Container>
      <HeroSection>
        <Content>
          <HeroContent>
            <Title>Organize Your Life with Smart Calendar & Todo</Title>
            <Subtitle>
              Seamlessly manage your schedule and tasks in one beautiful,
              intuitive interface. Stay productive and never miss a deadline.
            </Subtitle>
            <ButtonGroup>
              <Button size="large">Get Started</Button>
              <Button variant="outline" size="large">
                Learn More
              </Button>
            </ButtonGroup>
          </HeroContent>
          <Illustration type="hero" />
        </Content>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard>
            <Illustration type="feature" />
            <FeatureTitle>Smart Calendar</FeatureTitle>
            <FeatureDescription>
              View your schedule in multiple formats and sync with your favorite
              calendar apps.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Illustration type="feature" />
            <FeatureTitle>Task Management</FeatureTitle>
            <FeatureDescription>
              Create, organize, and track your tasks with powerful todo
              features.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Illustration type="feature" />
            <FeatureTitle>Beautiful Interface</FeatureTitle>
            <FeatureDescription>
              Enjoy a modern, clean design that makes productivity a pleasure.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Get Started?</CTATitle>
          <CTASubtitle>
            Join thousands of users who are already organizing their lives
            better.
          </CTASubtitle>
          <Button size="large" variant="light">
            Sign Up Now
          </Button>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default LandingPage;
