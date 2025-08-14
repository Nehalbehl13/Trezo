// import React from "react";

// const SideMenu = () => {
//   return <div>sideMenu</div>;
// };

// export default SideMenu;

// import React, { useContext } from "react";
// import { SIDE_MENU_DATA } from "../../utils/data";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";

// const SideMenu = ({ activeMenu }) => {
//   const { user, clearUser } = useContext(UserContext);

//   const navigate = useNavigate();

//   const handleClick = (route) => {
//     if (route === "logout") {
//       handleLogout();
//       return;
//     }
//     navigate(route);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     clearUser();
//     navigate("/login");
//   };

//   return <div className="">
//       <div className="">
//         {!user?.profileImageUrl ? (
//             <img
//                src={user?.profileImageUrl || ""}
//                alt="Profile Image"
//                className=""
//             />) : <charAvatar
// fullName={fullname}
// width="w-20"
// height="h-20"
// style="text-xl"
// />}

//         <h5 className="">
//             {user?.fullName || ""}

//         </h5>
//        </div>

//        {
//   SIDE_MENU_DATA.map((item, index) => (
//     <button
//       key={`menu_${index}`}
//       className={`w-full flex items-center gap-4 text-[15px] ${
//         activeMenu === item.label ? "text-white bg-primary" : ""
//       } py-3 px-6 rounded-lg mb-3`}
//       onClick={() => handleClick(item.path)}
//     >
//       <item.icon className="" />
//       {item.label}
//     </button>
//   ))
// }
// </div>

// };

//

// import React, { useContext } from "react";
// import { SIDE_MENU_DATA } from "../../utils/data";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";

// const SideMenu = ({ activeMenu }) => {
//   const { user, clearUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleClick = (route) => {
//     if (route === "logout") {
//       handleLogout();
//       return;
//     }
//     navigate(route);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     clearUser();
//     navigate("/login");
//   };

//   return (
//     <div className="w-64 min-h-screen bg-gray-900 text-gray-200 p-6 flex flex-col">
//       {/* User Profile */}
//       <div className="flex flex-col items-center mb-8">
//         {user?.profileImageUrl ? (
//           <img
//             src={user.profileImageUrl}
//             alt="Profile"
//             className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-primary"
//           />
//         ) : (
//           <div className="w-20 h-20 rounded-full bg-gray-700 mb-3 flex items-center justify-center text-xl font-bold">
//             {user?.fullName?.charAt(0) || "U"}
//           </div>
//         )}
//         <h5 className="text-white text-lg font-semibold text-center">
//           {user?.fullName || "User"}
//         </h5>
//       </div>

//       {/* Menu Items */}
//       <div className="flex flex-col">
//         {SIDE_MENU_DATA.map((item, index) => (
//           <button
//             key={`menu_${index}`}
//             className={`w-full flex items-center gap-4 text-[15px] font-medium py-3 px-4 rounded-lg mb-2 transition-colors duration-200 ${
//               activeMenu === item.label
//                 ? "bg-primary text-white"
//                 : "hover:bg-gray-800 hover:text-white"
//             }`}
//             onClick={() => handleClick(item.path)}
//           >
//             <item.icon className="w-5 h-5" />
//             {item.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SideMenu;

// import React, { useContext } from "react";
// import { SIDE_MENU_DATA } from "../../utils/data";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import CharAvatar from "../cards/charAvatar";

// const SideMenu = ({ activeMenu }) => {
//   const { user, clearUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleClick = (route) => {
//     if (route === "logout") {
//       handleLogout();
//       return;
//     }
//     navigate(route);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     clearUser();
//     navigate("/login");
//   };

//   return (
//     <div className="w-64 min-h-screen bg-white shadow-lg p-6 flex flex-col">
//       {/* Profile Section */}
//       <div className="flex flex-col items-center mb-8">
//         {!user?.profileImageUrl ? (
//           <img
//             src={user.profileImageUrl}
//             alt="Profile"
//             className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-purple-500"
//           />
//         ) : (
//           <CharAvatar
//             fullName={user?.fullName || "User"}
//             width="w-20"
//             height="h-20"
//             style="text-xl"
//             className="mb-3 border-2 border-purple-500"
//           />
//         )}
//         <h5 className="text-gray-800 text-lg font-semibold text-center">
//           {user?.fullName || "User"}
//         </h5>
//       </div>

//       {/* Menu Items */}
//       <div className="flex flex-col">
//         {SIDE_MENU_DATA.map((item, index) => (
//           <button
//             key={`menu_${index}`}
//             className={`w-full flex items-center gap-4 text-[15px] font-medium py-3 px-4 rounded-lg mb-2 transition-colors duration-200
//               ${
//                 activeMenu === item.label
//                   ? "bg-purple-500 text-white"
//                   : "text-gray-700 hover:bg-purple-500 hover:text-white"
//               }`}
//             onClick={() => handleClick(item.path)}
//           >
//             <item.icon className="w-5 h-5" />
//             {item.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SideMenu;

import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../cards/charAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  // If user is not loaded yet, show placeholder
  if (!user) return <div className="w-64 p-6">Loading...</div>;

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-white shadow-lg p-6 flex flex-col">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-purple-500"
          />
        ) : (
          <CharAvatar
            fullName={user.fullName || "User"}
            width="w-20"
            height="h-20"
            style="text-xl"
            className="mb-3 border-2 border-purple-500"
          />
        )}
        <h5 className="text-gray-800 text-lg font-semibold text-center">
          {user.fullName || "User"}
        </h5>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] font-medium py-3 px-4 rounded-lg mb-2 transition-colors duration-200
              ${
                activeMenu === item.label
                  ? "bg-purple-500 text-white"
                  : "text-gray-700 hover:bg-purple-500 hover:text-white"
              }`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
