import React from "react";
import styled from "styled-components";
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
  ForgotPassword,
  SignUpLink,
  Divider,
} from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Login attempt:", values);
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
          <StyledForm
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            requiredMark={false}
          >
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
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <ForgotPassword>
              <a href="#">Forgot password?</a>
            </ForgotPassword>
            <Button type="submit" variant="primary" fullWidth>
              Sign In
            </Button>
            <Divider>or continue with</Divider>
            <Button type="button" variant="outline" fullWidth>
              Continue with Google
            </Button>
          </StyledForm>
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
