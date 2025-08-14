// import React from "react";

// const Navbar = () => {
//   return <div></div>;
// };

// export default Navbar;

// import React, { useState } from "react";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import SideMenu from "./SideMenu";

// const Navbar = ({ activeMenu }) => {
//   const [openSideMenu, setOpenSideMenu] = useState(false);

//   return (
//     <div className="flex items-center gap-5 bg-white border-b border-gray-300 px-4 py-2">
//       {/* Mobile Menu Toggle Button */}
//       <button
//         className="block lg:hidden text-black"
//         onClick={() => setOpenSideMenu(!openSideMenu)}
//       >
//         {openSideMenu ? (
//           <HiOutlineX className="text-2xl" />
//         ) : (
//           <HiOutlineMenu className="text-2xl" />
//         )}
//       </button>

//       {/* Title */}
//       <h2 className="text-lg font-medium text-black">Trezo Dashboard</h2>

//       {/* Mobile Side Menu */}
//       {openSideMenu && (
//         <div className="fixed top-[61px] left-0 z-50 bg-white shadow-lg w-64 h-full">
//           <SideMenu activeMenu={activeMenu} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center gap-5 bg-white border-b border-gray-300 px-4 py-2">
      {/* Mobile Menu Toggle Button */}
      <button
        className="block lg:hidden text-black"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      {/* Title */}
      <h2 className="text-lg font-bold text-black">Trezo</h2>

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div className="fixed top-[61px] left-0 z-50 bg-white shadow-lg w-64 h-full">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
