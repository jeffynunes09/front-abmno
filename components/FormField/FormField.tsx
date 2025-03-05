import { Hint } from "../Hint/Hint";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { FormFieldProps } from "./FormFieldProps";

export function FormField({ label, type, value, placeholder, onChange, icon, message, showError, ...rest }: FormFieldProps) {
  return (
    <>
      <Label
        label={label}
        {...rest} />

      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest} />

      {showError && (
        <Hint
          icon={icon}
          message={message}
          {...rest} />
      )}
    </>
  )
}