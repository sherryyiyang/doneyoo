import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Form } from "antd";
import Button from "../../components/Common/Button";
import authIllustration from "../../assets/auth_page_illustration.jpg";

import {
  Container,
  IllustrationSection,
  Illustration,
  FormSection,
  FormContainer,
  Title,
  Subtitle,
  StyledForm,
  NameGroup,
  TermsText,
  SignInLink,
  Divider,
} from "./styles";


const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Signup attempt:", values);
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
          <StyledForm
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            requiredMark={false}
          >
            <NameGroup>
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
              >
                <Input placeholder="Enter your first name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
              >
                <Input placeholder="Enter your last name" />
              </Form.Item>
            </NameGroup>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please create a password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password placeholder="Create a password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>
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
          </StyledForm>
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
