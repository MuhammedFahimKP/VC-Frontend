import type { FieldValues } from "react-hook-form";
import type { FormFieldPropType } from "@/types";

import {
  FormField as UiFormField,
  FormMessage,
  FormItem,
  FormControl,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const FormField = <T extends FieldValues>({
  name,
  formControl,
  label,
  placeholder,
  description,
  inputType,
}: FormFieldPropType<T>) => {
  return (
    <UiFormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormField;
