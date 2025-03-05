import { ChangeEvent, ElementType, InputHTMLAttributes } from "react";

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  type: 'text' | 'password' | 'email' | 'number' | 'date',
  value: string,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  showError?: boolean,
  icon?: ElementType,
  message?: string
}