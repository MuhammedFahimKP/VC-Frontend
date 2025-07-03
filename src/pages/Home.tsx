import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Product from "./sub/Product";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Sidebar />
      <Product />
    </div>
  );
};

export default Home;
