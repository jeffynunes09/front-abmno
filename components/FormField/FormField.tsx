import { forwardRef, ForwardRefRenderFunction } from "react";
import { Hint } from "../Hint/Hint";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { FormFieldProps } from "./FormFieldProps";

const Form: ForwardRefRenderFunction<HTMLInputElement, FormFieldProps> = ({ label, type, placeholder, icon, message, hasError, campoObrigatorio, ...rest }, ref) => {
  return (
    <div className="inline">
      <Label
        label={label}
        campoObrigatorio
        {...rest} />

      <Input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest} />

      {hasError && (
        <Hint
          icon={icon}
          message={message}
          hasError={hasError}
          {...rest} />
      )}
    </div>
  )
}

export const FormField = forwardRef(Form);