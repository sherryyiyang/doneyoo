import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import authIllustration from "../../assets/auth_page_illustration.jpg";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--neutral-50);
`;

const IllustrationSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Illustration = styled.img`
  height: 90%;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--dark-text);
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: var(--neutral-600);
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: var(--neutral-700);
`;

const ForgotPassword = styled.a`
  font-size: 14px;
  color: var(--primary-500);
  text-decoration: none;
  align-self: flex-end;
  margin-top: -12px;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
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

const SignUpLink = styled.p`
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

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log("Login attempt:", formData);
    navigate("/dashboard");
  };

  return (
    <Container>
      <IllustrationSection>
        <Illustration src={authIllustration} alt="Authentication" />
      </IllustrationSection>
      <FormSection>
        <FormContainer>
          <Title>Welcome Back</Title>
          <Subtitle>Sign in to continue to your account</Subtitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
                fullWidth
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter your password"
                fullWidth
                required
              />
              <ForgotPassword href="#">Forgot password?</ForgotPassword>
            </FormGroup>
            <Button type="submit" variant="primary" fullWidth>
              Sign In
            </Button>
            <Divider>or continue with</Divider>
            <Button type="button" variant="outline" fullWidth>
              Continue with Google
            </Button>
          </Form>
          <SignUpLink>
            Don't have an account?{" "}
            <a
              href="/signup"
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
            >
              Sign up
            </a>
          </SignUpLink>
        </FormContainer>
      </FormSection>
    </Container>
  );
};

export default Login;
