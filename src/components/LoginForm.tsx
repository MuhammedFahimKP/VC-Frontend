import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchemaType } from "@/schema/index";

import { Form } from "@/components/ui/form";

import FormField from "./form/FormField";

const LoginForm = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchemaType) => {
    console.log(values);
    // form.setError("email", "its not valid");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[90%] md:w-2/4 lg:w-4/6  mt-2 lg:mt-0  bg-white font-ubuntu flex flex-col gap-8 h-5/6 p-10 rounded-3xl border border-gray-50 shadow-sm"
      >
        <FormField<LoginSchemaType>
          formControl={form.control}
          label="Email"
          name="email"
          placeholder="hello"
        />
        <FormField<LoginSchemaType>
          formControl={form.control}
          label="Password"
          name="password"
          placeholder="password"
        />
        <button
          type="submit"
          className="bg-black rounded-xl  mt-10 text-white py-2  "
        >
          Submit
        </button>
      </form>
    </Form>
  );
};

export default LoginForm;
