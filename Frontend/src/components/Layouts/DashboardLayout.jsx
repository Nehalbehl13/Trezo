// import React from "react";

// const DashboardLayout = () => {
//   return (

//   )
// };

// export default DashboardLayout;

// import React, { useContext } from "react";
// import { UserContext } from "../../context/UserContext";
// import Navbar from "../Navbar";
// import SideMenu from "../SideMenu";

// const DashboardLayout = ({ children, activeMenu }) => {
//   const { user } = useContext(UserContext);

//   return (
//     <div className="">
//       <Navbar activeMenu={activeMenu} />

//       {user && (
//         <div className="flex">
//           {/* Sidebar for large screens */}
//           <div className="max-[1080px]:hidden">
//             <SideMenu activeMenu={activeMenu} />
//           </div>

//           {/* Main Content */}
//           <div className="grow mx-5">{children}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardLayout;

// import React from "react";
// import { UserContext } from "../../context/UserContext";
// import SideMenu from "./SideMenu";
// import Navbar from "./Navbar";

// const DashboardLayout = ({ activeMenu, children }) => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar activeMenu={activeMenu} />

//       {/* Sidebar + Main Content */}
//       <div className="flex pt-[61px]">
//         {/* Sidebar for large screens */}
//         <div className="hidden lg:block">
//           <SideMenu activeMenu={activeMenu} />
//         </div>

//         {/* Main Content */}
//         <div className="grow mx-5">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useState } from "react";
import SideMenu from "./SideMenu";
import Navbar from "./Navbar";

const DashboardLayout = ({ activeMenu, children }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar
        activeMenu={activeMenu}
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
      />

      {/* Sidebar + Main Content */}
      <div className="flex pt-[61px]">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block">
          <SideMenu activeMenu={activeMenu} />
        </div>

        {/* Main Content */}
        <div className="grow mx-5">{children}</div>
      </div>

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setOpenSideMenu(false)}
        >
          {/* Sidebar */}
          <div
            className="fixed top-[61px] left-0 z-50 bg-white shadow-lg w-64 h-full"
            onClick={(e) => e.stopPropagation()} // prevent close on inside click
          >
            <SideMenu activeMenu={activeMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
