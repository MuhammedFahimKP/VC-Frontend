import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <section className="min-h-screen min-w-screen flex flex-col lg:flex-row  overflow-scroll justify-center gap-1 lg:gap-0 p-2  lg:p-32 ">
      <div className="h-28 lg:my-36  md:flex-1 lg:flex-1  flex items-center md:items-end lg:items-center    justify-center  ">
        <h1 className="text-5xl md:text-6xl italic font-manufacturing-consent md:mb-20 lg:mb-0 ">
          Wild Fab{" "}
        </h1>
      </div>
      <div className="flex-1  lg:p-10 flex items-start lg:items-center justify-center  lg:border-l lg:border-gray-200 ">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
