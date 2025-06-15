import styled from "styled-components";
import { Form } from "antd";


export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--neutral-50);

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 16px;

         & > div:first-child {
            display: none;
        }
    }
`;

export const IllustrationSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const Illustration = styled.img`
    width: 100%;
  object-fit: cover;
  z-index: 2;
  max-width: 800px;
  max-height: 98vh;

`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;


`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--dark-text);
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: var(--neutral-600);
  margin-bottom: 32px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-input-affix-wrapper {
    border-radius: 8px;
    border: 1px solid var(--neutral-200);
    padding: 8px 12px;
    height: 44px;
    transition: all 0.2s;

    &:hover,
    &:focus {
      border-color: var(--primary-500);
      box-shadow: 0 0 0 2px rgba(113, 97, 239, 0.1);
    }
  }

  .ant-input {
    font-size: 14px;

    &::placeholder {
      color: var(--neutral-400);
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: var(--neutral-700);
`;

export const ForgotPassword = styled.a`
  font-size: 14px;
  color: var(--primary-500);
  text-decoration: none;
  align-self: flex-end;
  margin-top: -12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 24px 0;
  color: var(--neutral-500);

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid var(--neutral-200);
  }

  &::before {
    margin-right: 16px;
  }

  &::after {
    margin-left: 16px;
  }
`;

export const SignUpLink = styled.p`
  text-align: center;
  margin-top: 24px;
  color: var(--neutral-600);

  a {
    color: var(--primary-500);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NameGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const TermsText = styled.p`
  font-size: 14px;
  color: var(--neutral-600);
  text-align: center;
  margin-top: 16px;

  a {
    color: var(--primary-500);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SignInLink = styled.p`
  text-align: center;
  margin-top: 24px;
  color: var(--neutral-600);

  a {
    color: var(--primary-500);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;