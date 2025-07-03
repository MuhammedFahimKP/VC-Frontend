import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("please provide valid email"),
  password: z
    .string()
    .min(8, "please provide valid password")
    .max(16, "please provide valid password"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

export { loginSchema, type LoginSchemaType };
