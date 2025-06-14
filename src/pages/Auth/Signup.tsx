import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import authIllustration from "../../assets/auth_page_illustration.jpg";

const Container = styled.div`
  display: flex;
  height: 100vh;
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
  padding: 48px 0;
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

const NameGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const TermsText = styled.p`
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

const SignInLink = styled.p`
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

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle registration
    console.log("Signup attempt:", formData);
    navigate("/dashboard");
  };

  return (
    <Container>
      <IllustrationSection>
        <Illustration src={authIllustration} alt="Authentication" />
      </IllustrationSection>
      <FormSection>
        <FormContainer>
          <Title>Create Account</Title>
          <Subtitle>Sign up to get started with your account</Subtitle>
          <Form onSubmit={handleSubmit}>
            <NameGroup>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="Enter your first name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Enter your last name"
                  required
                />
              </FormGroup>
            </NameGroup>
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
                placeholder="Create a password"
                fullWidth
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                placeholder="Confirm your password"
                fullWidth
                required
              />
            </FormGroup>
            <Button type="submit" variant="primary" fullWidth>
              Create Account
            </Button>
            <Divider>or continue with</Divider>
            <Button type="button" variant="outline" fullWidth>
              Continue with Google
            </Button>
            <TermsText>
              By signing up, you agree to our <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>
            </TermsText>
          </Form>
          <SignInLink>
            Already have an account?{" "}
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Sign in
            </a>
          </SignInLink>
        </FormContainer>
      </FormSection>
    </Container>
  );
};

export default Signup;
