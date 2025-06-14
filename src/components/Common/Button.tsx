import React, { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "light";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  as?: React.ElementType;
  to?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  white-space: nowrap;

  /* Size Variants */
  ${({ size }) => {
    switch (size) {
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
          background: var(--secondary-500);
          color: white;
          border: none;
          &:hover {
            background: var(--secondary-600);
          }
        `;
      case "outline":
        return `
          background: transparent;
          color: var(--primary-600);
          border: 2px solid var(--primary-600);
          &:hover {
            background: var(--primary-50);
          }
        `;
      case "light":
        return `
          background: white;
          color: var(--primary-600);
          border: none;
          &:hover {
            background: var(--neutral-100);
          }
        `;
      default:
        return `
          background: var(--primary-500);
          color: white;
          border: none;
          &:hover {
            background: var(--primary-600);
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
