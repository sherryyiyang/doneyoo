import styled, { css } from "styled-components";

const commonSectionStyles = css`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const commonTitleStyles = css`
  font-weight: 600;
  color: var(--neutral-900);
  margin-bottom: 16px;
`;

const commonLinkStyles = css`
  color: var(--primary-500);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: var(--primary-600);
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
  min-height: 100vh;
  background: var(--neutral-50);

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: var(--neutral-900);
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const Content = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export const Section = styled.section`
  ${commonSectionStyles}
`;

export const SectionTitle = styled.h2`
  ${commonTitleStyles}
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SectionContent = styled.div`
  color: var(--neutral-700);
  line-height: 1.6;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  ul {
    margin: 16px 0;
    padding-left: 24px;

    li {
      margin-bottom: 8px;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &::marker {
        color: var(--primary-500);
      }
    }
  }

  a {
    ${commonLinkStyles}
  }

  br {
    margin: 8px 0;
  }
`;

export const Subsection = styled.div`
  margin-top: 16px;
  padding-left: 16px;
  border-left: 2px solid var(--neutral-200);
`;

export const SubsectionTitle = styled.h3`
  ${commonTitleStyles}
  font-size: 18px;
  color: var(--neutral-800);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HighlightText = styled.span`
  color: var(--primary-600);
  font-weight: 500;
`;

export const ContactInfo = styled.div`
  margin-top: 16px;
  padding: 16px;
  background: var(--neutral-50);
  border-radius: 4px;
  border: 1px solid var(--neutral-200);

  a {
    ${commonLinkStyles}
    font-weight: 500;
  }
`;

export const LastUpdated = styled.div`
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--neutral-200);
  color: var(--neutral-600);
  font-size: 14px;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 15px;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid var(--neutral-200);
  }

  th {
    font-weight: 600;
    color: var(--neutral-800);
    background: var(--neutral-50);
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const DefinitionList = styled.dl`
  margin: 16px 0;

  dt {
    font-weight: 600;
    color: var(--neutral-800);
    margin-bottom: 4px;
  }

  dd {
    margin-left: 16px;
    margin-bottom: 16px;
    color: var(--neutral-700);

    &:last-child {
      margin-bottom: 0;
    }
  }
`; 