import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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


const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // In a real app, you would validate the token here
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  React.useEffect(() => {
    if (!token || !email) {
      message.error("Invalid or expired reset link");
      navigate("/forgot-password");
    }
  }, [token, email, navigate]);

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would call an API to reset the password
      console.log("Resetting password for:", email, "with token:", token);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      message.success(
        "Password reset successful! Please sign in with your new password."
      );
      navigate("/login");
    } catch (error) {
      message.error("Failed to reset password. Please try again.");
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
          <Title>Reset Password</Title>
          <Subtitle>Enter your new password below</Subtitle>
          <StyledForm
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your new password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password placeholder="Enter new password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your new password" },
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
              <Input.Password placeholder="Confirm new password" />
            </Form.Item>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;
