// import React from "react";
// import { getInitials } from "../../utils/helper";

// const CharAvatar = ({ fullName, width, height, style }) => {
//   return (
//     <div
//       className={`${width || "w-12"} ${height || "h-12"} ${
//         style || ""
//       } flex items-center justify-center rounded-full text-gray-900`}
//     >
//       {getInitials(fullName || "")}
//     </div>
//   );
// };

// export default CharAvatar;
import React from "react";
import { getInitials } from "../../utils/helper";

const CharAvatar = ({ fullName, width, height, style, className }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full
        ${width || "w-20"} ${height || "h-20"} 
        bg-purple-200 border-2 border-purple-500 text-purple-800 font-bold
        ${style || ""} ${className || ""}`}
    >
      {getInitials(fullName || "User")}
    </div>
  );
};

export default CharAvatar;
