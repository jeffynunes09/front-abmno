import { ChangeEvent, ElementType, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  value: string,
  placeholder: string,
  iconStart?: ElementType,
  hasError?: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}