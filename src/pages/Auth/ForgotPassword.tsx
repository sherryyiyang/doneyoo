import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Form, message } from "antd";
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
  SignInLink,
} from "./styles";


const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would call an API to send the reset email
      console.log("Sending reset email to:", values.email);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      message.success("Reset link sent! Please check your email.");
      navigate("/login");
    } catch (error) {
      message.error("Failed to send reset link. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <IllustrationSection>
        <Illustration src={authIllustration} alt="Authentication" />
      </IllustrationSection>
      <FormSection>
        <FormContainer>
          <Title>Forgot Password</Title>
          <Subtitle>
            Enter your email address and we'll send you a link to reset your
            password
          </Subtitle>
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
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </Button>
          </StyledForm>
          <SignInLink>
            Remember your password?{" "}
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

export default ForgotPassword;
