// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useWindowDimensions } from "@/hooks";

// import { AdminSideBarContext } from "@/context";

// import DropDownBtn from "@/ui/admin/DropDownBtn";

// import {
//   PiTrademark,
//   PiPantsFill,
//   PiTShirtLight,
//   PiPackageFill,
// } from "react-icons/pi";
// import { FaShopify } from "react-icons/fa6";
// import { FaUserGroup } from "react-icons/fa6";
// import { AiFillProduct } from "react-icons/ai";
// import { CgColorPicker } from "react-icons/cg";
// import { HiOutlineChartBar } from "react-icons/hi";

import { Layers, Package } from "lucide-react";

import { useState } from "react";

const Sidebar = () => {
  //   const navigate = useNavigate();
  //   const { width } = useWindowDimensions();
  //   const sideBarContext = useContext(AdminSideBarContext);
  //   // const [isLgDevice, setIsLgDevice] = useState(false);

  //   // useEffect(() => {
  //   //   setIsLgDevice(width > 900);
  //   // }, [width]);

  //   const { isMobileOpen, handleOpen } = sideBarContext ?? {
  //     isMobileOpen: false,
  //     handleOpen: () => null,
  //   };

  //   useEffect(() => {
  //     if (width > 900 && isMobileOpen) {
  //       handleOpen();
  //     }
  //   }, [width]);

  return (
    <aside
      className={`w-64 lg:w-1/6 min-h-screen fixed mt-24 font-ubuntu     bg-white   z-50    flex flex-col items-center gap-2  py-4  border-r-[1px] transition-transform duration-300 
        ${
          // isMobileOpen && width < 900 ? "translate-x-0" : "-translate-x-full"
          ""
        } lg:translate-x-0  `}
    >
      <button
        // onClick={() => navigate("/admin/")}
        className="flex  items-center font-ubuntu      hover:cursor-pointer hover:bg-gray-200 gap-2  w-[85%] pl-4    rounded-2xl text-zinc-950 bg-white text-lg   py-1  "
      >
        <Package />
        Product
      </button>

      <button
        // onClick={() => navigate("/admin/")}
        className="flex  items-center font-ubuntu      hover:cursor-pointer hover:bg-gray-200 gap-2  w-[85%] pl-4    rounded-2xl text-zinc-950 bg-white text-lg   py-1  "
      >
        <Layers />
        Stock
      </button>
    </aside>
  );
};

export default Sidebar;
