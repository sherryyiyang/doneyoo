import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: string;
}

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

const StyledInput = styled.input<InputProps>`
  padding: 8px 12px;
  border: 2px solid var(--neutral-200);
  border-radius: 8px;
  font-size: 16px;
  color: var(--neutral-900);
  background: white;
  transition: all 0.2s;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 2px var(--primary-100);
  }

  &:hover {
    border-color: var(--neutral-300);
  }

  &::placeholder {
    color: var(--neutral-400);
  }

  &[type="date"] {
    min-width: 150px;

    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  ${({ error }) =>
    error &&
    `
    border-color: var(--error-500);
    &:focus {
      box-shadow: 0 0 0 2px var(--error-100);
    }
  `}
`;

const ErrorText = styled.span`
  color: var(--error-500);
  font-size: 14px;
`;

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <InputContainer fullWidth={props.fullWidth}>
      <StyledInput {...props} error={error} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
