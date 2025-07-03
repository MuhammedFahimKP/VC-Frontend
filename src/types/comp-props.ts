import type { FieldPath, Control, FieldValues } from "react-hook-form";

export interface FormFieldPropType<Schema extends FieldValues> {
  name: FieldPath<Schema>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<Schema>;
}
