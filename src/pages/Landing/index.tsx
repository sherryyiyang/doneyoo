import React from "react";
import Button from "../../components/Common/Button";
import Illustration from "../../components/Common/Illustration";
import {
  Container,
  HeroSection,
  Content,
  HeroContent,
  Title,
  Subtitle,
  ButtonGroup,
  FeaturesSection,
  FeaturesGrid,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
  CTASection,
  CTAContent,
  CTATitle,
  CTASubtitle,
} from "./styles";

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
