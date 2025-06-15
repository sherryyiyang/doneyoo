import React, { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "light";
  size?: "small" | "medium" | "large" | "extra-small";
  fullWidth?: boolean;
  as?: React.ElementType;
  to?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;

  /* Size Variants */
  ${({ size }) => {
    switch (size) {
      case "extra-small":
        return `
          padding: 6px 12px;
          font-size: 12px;
        `;
      case "small":
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case "large":
        return `
          padding: 16px 32px;
          font-size: 18px;
        `;
      default:
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
    }
  }}

  /* Style Variants */
  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return `
          background: var( --dark-text);
          color: white;
          border: none;
          &:hover {
            background: var( --dark-text);
          }
        `;
      case "outline":
        return `
          background: transparent;
          color: var( --dark-text);
          border: 1px solid var( --dark-text);
          &:hover {
            background: var(--primary-50);
          }
        `;
      case "light":
        return `
          background: white;
          color: var( --dark-text);
          border: none;
          &:hover {
            background: var(--neutral-100);
          }
        `;
      default:
        return `
          background: var( --dark-text);
          color: white;
          border: none;
          &:hover {
            background: var( --dark-text);
          }
        `;
    }
  }}
  
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, as, ...props }, ref) => {
    return (
      <StyledButton as={as} ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
