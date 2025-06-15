import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
  min-height: 100vh;
  background: var(--neutral-50);
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: var(--neutral-900);
  margin-bottom: 32px;
  text-align: center;
`;

export const Content = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--neutral-900);
  margin-bottom: 16px;
`;

export const SectionContent = styled.div`
  color: var(--neutral-700);
  line-height: 1.6;

  ul {
    margin: 16px 0;
    padding-left: 24px;

    li {
      margin-bottom: 8px;
    }
  }

  a {
    color: var(--primary-500);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`; 