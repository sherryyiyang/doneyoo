import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Common/Button";

const HeroSection = styled.section`
  padding: 80px 24px;
  background: linear-gradient(135deg, var(--gradient-primary) 0%, #2563eb 100%);
  color: white;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.9;
`;

const HeroImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 24px;
  background: white;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 16px;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #6b7280;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  padding: 32px;
  background: #f9fafb;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.5;
`;

const CTASection = styled.section`
  padding: 80px 24px;
  background: #f3f4f6;
`;

const CTAContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
`;

const CTADescription = styled.p`
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle>Organize Your Life with Doneyoo</HeroTitle>
            <HeroDescription>
              The all-in-one calendar and task management solution that helps
              you stay organized, meet deadlines, and achieve your goals.
            </HeroDescription>
            <ButtonGroup>
              <Button as={Link} to="/signup" size="large">
                Get Started - It's Free
              </Button>
              <Button as={Link} to="/features" variant="outline" size="large">
                Learn More
              </Button>
            </ButtonGroup>
          </HeroText>
          <HeroImage>
            <img src="/hero-image.svg" alt="Doneyoo Dashboard Preview" />
          </HeroImage>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why Choose Doneyoo?</SectionTitle>
        <SectionDescription>
          Discover how Doneyoo can transform your productivity and help you
          manage your time effectively.
        </SectionDescription>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </FeatureIcon>
            <FeatureTitle>Smart Time Management</FeatureTitle>
            <FeatureDescription>
              Efficiently plan your schedule with our intuitive calendar
              interface. Set reminders and never miss important deadlines.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </FeatureIcon>
            <FeatureTitle>Task Organization</FeatureTitle>
            <FeatureDescription>
              Create, organize, and prioritize tasks with ease. Track progress
              and celebrate completing your goals.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </FeatureIcon>
            <FeatureTitle>Team Collaboration</FeatureTitle>
            <FeatureDescription>
              Share calendars and tasks with team members. Stay synchronized and
              boost productivity together.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Get Started?</CTATitle>
          <CTADescription>
            Join thousands of users who are already organizing their lives with
            Doneyoo. Start your free trial today!
          </CTADescription>
          <ButtonGroup>
            <Button as={Link} to="/signup" size="large">
              Start Free Trial
            </Button>
            <Button as={Link} to="/contact" variant="outline" size="large">
              Contact Sales
            </Button>
          </ButtonGroup>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default LandingPage;
