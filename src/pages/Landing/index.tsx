import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Common/Button";
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
  Illustration,
} from "./styles";
import landingIllustration from "../../assets/landing.png";
import blackWhiteIllustration1 from "../../assets/blackwhite_1.png";
import blackWhiteIllustration2 from "../../assets/blackwhite_2.png";
import blackWhiteIllustration3 from "../../assets/blackwhite_3.png";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

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
              <Button size="large" onClick={() => navigate("/signup")}>
                Get Started
              </Button>
              <Button variant="outline" size="large">
                Learn More
              </Button>
            </ButtonGroup>
          </HeroContent>
          <Illustration src={landingIllustration} alt="Landing" />
        </Content>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard>
            <Illustration src={blackWhiteIllustration1} alt="Landing" />
            <FeatureTitle>Smart Calendar</FeatureTitle>
            <FeatureDescription>
              View your schedule in multiple formats and sync with your favorite
              calendar apps.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Illustration src={blackWhiteIllustration2} alt="Landing" />
            <FeatureTitle>Task Management</FeatureTitle>
            <FeatureDescription>
              Create, organize, and track your tasks with powerful todo
              features.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Illustration src={blackWhiteIllustration3} alt="Landing" />
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
          <Button
            size="large"
            variant="light"
            onClick={() => navigate("/signup")}
          >
            Sign Up Now
          </Button>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default LandingPage;
