import React from "react";
import styled from "styled-components";

interface IllustrationProps {
  type?: "hero" | "feature" | "empty";
}

const IllustrationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
`;

const GradientShape = styled.div<{ variant: number }>`
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-primary);
  filter: blur(40px);
  opacity: 0.15;
  z-index: 0;

  ${({ variant }) => {
    switch (variant) {
      case 1:
        return `
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
          transform: rotate(-45deg);
        `;
      case 2:
        return `
          width: 300px;
          height: 300px;
          bottom: -50px;
          left: -50px;
          transform: rotate(45deg);
          background: var(--gradient-secondary);
        `;
      case 3:
        return `
          width: 200px;
          height: 200px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(135deg, var(--primary-400) 0%, var(--secondary-400) 100%);
        `;
      default:
        return "";
    }
  }}
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const HeroIllustration = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Calendar Base */}
    <rect
      x="200"
      y="100"
      width="400"
      height="400"
      rx="20"
      fill="var(--neutral-100)"
    />
    <rect x="220" y="150" width="360" height="330" rx="10" fill="white" />

    {/* Calendar Header */}
    <rect
      x="200"
      y="100"
      width="400"
      height="50"
      rx="20"
      fill="var(--primary-500)"
    />

    {/* Calendar Days */}
    <g fill="var(--neutral-300)">
      {Array.from({ length: 7 }).map((_, i) => (
        <circle key={i} cx={250 + i * 50} cy="200" r="15" />
      ))}
    </g>

    {/* Calendar Events */}
    <rect
      x="240"
      y="250"
      width="100"
      height="30"
      rx="5"
      fill="var(--primary-200)"
    />
    <rect
      x="240"
      y="300"
      width="150"
      height="30"
      rx="5"
      fill="var(--secondary-200)"
    />
    <rect
      x="240"
      y="350"
      width="80"
      height="30"
      rx="5"
      fill="var(--primary-300)"
    />

    {/* Decorative Elements */}
    <circle
      cx="600"
      cy="150"
      r="100"
      fill="var(--gradient-primary)"
      opacity="0.1"
    />
    <circle
      cx="200"
      cy="450"
      r="80"
      fill="var(--gradient-secondary)"
      opacity="0.1"
    />
  </svg>
);

const FeatureIllustration = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Task List */}
    <rect x="50" y="50" width="300" height="200" rx="10" fill="white" />
    <rect
      x="70"
      y="80"
      width="260"
      height="30"
      rx="5"
      fill="var(--primary-100)"
    />
    <rect
      x="70"
      y="120"
      width="260"
      height="30"
      rx="5"
      fill="var(--secondary-100)"
    />
    <rect
      x="70"
      y="160"
      width="260"
      height="30"
      rx="5"
      fill="var(--primary-100)"
    />

    {/* Checkboxes */}
    <circle cx="85" cy="95" r="8" fill="var(--primary-500)" />
    <circle cx="85" cy="135" r="8" fill="var(--secondary-500)" />
    <circle cx="85" cy="175" r="8" fill="var(--primary-500)" />
  </svg>
);

const EmptyIllustration = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="80" fill="var(--neutral-100)" />
    <path
      d="M100 60v80M60 100h80"
      stroke="var(--primary-500)"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const Illustration: React.FC<IllustrationProps> = ({ type = "hero" }) => {
  return (
    <IllustrationContainer>
      <GradientShape variant={1} />
      <GradientShape variant={2} />
      <GradientShape variant={3} />
      <Content>
        {type === "hero" && <HeroIllustration />}
        {type === "feature" && <FeatureIllustration />}
        {type === "empty" && <EmptyIllustration />}
      </Content>
    </IllustrationContainer>
  );
};

export default Illustration;
