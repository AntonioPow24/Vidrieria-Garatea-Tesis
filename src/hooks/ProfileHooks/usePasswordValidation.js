import { useState } from "react";

export const usePasswordValidation = () => {
  const [conditions, setConditions] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasMinLength: false,
    hasNoSpaces: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const validatePassword = (password) => {
    const newConditions = {
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasMinLength: password.length >= 8,
      hasNoSpaces: !/\s/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setConditions(newConditions);
    return Object.values(newConditions).every(Boolean);
  };

  return { conditions, validatePassword, setConditions };
};