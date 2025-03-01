import { ChangeEvent, TextareaHTMLAttributes } from "react";

export interface TexteareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>  {
  value: string,
  placeholder: string,
  hasError?: boolean,
  onChange:  (e: ChangeEvent<HTMLTextAreaElement>) => void
}