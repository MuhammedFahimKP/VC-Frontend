// import { UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-24 w-full flex  justify-around py-4 bg-red-700  md:px-24 lg:px-32   ">
      {/*---------------------- Start Right Sec --------------------*/}

      <section className="flex-1 flex items-center  ">
        <div className="">
          <h1 className="text-4xl  font-manufacturing-consent italic font-mr-dafoe ">
            Wild Fab{" "}
          </h1>
        </div>
      </section>

      {/*---------------------- End Right Sec -----------------------*/}

      {/*--------------------- Start Right Sec ----------------------*/}

      <section className="flex-1 ">{/* <UserRound/> */}</section>

      {/*-------------------- End Right Sec --------------------------*/}
    </nav>
  );
};

export default Navbar;
