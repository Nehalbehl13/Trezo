// export const useUserAuth = () => (
//     const {user, updateUser, clearUser } = useContext(UserContext);
//     const navigate = useNavigate();

//     useEffect{ () => {
//         if (user) return;

//         let isMounted = true;

//         const fetchUserInfo = async () => {
//             try {
//                 const response = await axionInstance.get(API_PATHS.AUTH.GET_USER_INFO);

//                 if (isMounted && response.data) {
//                     updateUser(response.data);
//                 }
//             } catch (error) {
//                console.error("failed to fetch user info:", error):
//                if (isMounted) {
//                  clearUser();
//                  navigate("/login");
//                }
//             }
//         };

//         fetchUserInfo();

//         return () => {
//             isMounted = false;
//         };
//       }, [updateUser, clearUser, navigate]);
//     };

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // adjust path
//import { axiosInstance } from "../utils/axiosInstance"; // adjust path
import axiosInstance from "../utils/axiosInstance";

import { API_PATHS } from "../utils/apiPaths"; // adjust path

export const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return; // If user already exists, do nothing

    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);

        if (isMounted && response.data) {
          updateUser(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        if (isMounted) {
          clearUser();
          navigate("/login");
        }
      }
    };

    fetchUserInfo();

    return () => {
      isMounted = false;
    };
  }, [user, updateUser, clearUser, navigate]);
};
