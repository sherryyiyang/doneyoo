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
  SubIllustration,
  TextParagraph,
  LogoSection,
} from "./styles";
import landingIllustration from "../../assets/doneyoo_landing.png";
import blackWhiteIllustration1 from "../../assets/blackwhite_1.png";
import blackWhiteIllustration2 from "../../assets/blackwhite_2.png";
import blackWhiteIllustration3 from "../../assets/blackwhite_3.png";
import donyooLogo from "../../assets/doneyoo_logo.png";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <HeroSection>
        <Content>
          <HeroContent>
            <Title>Celebrate What You Did — Not What You Missed.</Title>
            <Subtitle>
              Doneyoo helps you gently track what you’ve accomplished — no rigid
              plans, no guilt for what you didn’t do. Your effort deserves to be
              seen. Log your day, one real moment at a time.
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

      <TextParagraph>
        You don’t have to finish everything. You just have to show up — and
        we’ll help you see that you did.
      </TextParagraph>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard>
            <SubIllustration src={blackWhiteIllustration1} alt="Landing" />
            <FeatureTitle>Smart Calendar</FeatureTitle>
            <FeatureDescription>
              View your schedule in multiple formats and sync with your favorite
              calendar apps.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <SubIllustration src={blackWhiteIllustration2} alt="Landing" />
            <FeatureTitle>Task Management</FeatureTitle>
            <FeatureDescription>
              Create, organize, and track your tasks with powerful todo
              features.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <SubIllustration src={blackWhiteIllustration3} alt="Landing" />
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
