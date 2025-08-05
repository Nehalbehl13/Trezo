/*import React, { useState } from "react";
import AuthLayouts from "../../components/Layouts/AuthLayouts";
import { useNavigate } from "react-router-dom";
//import { Input } from "postcss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //login form submit wala handle ker rahe
  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic
    console.log("Logging in with:", email);
  };

  return (
    <AuthLayouts>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
        </form>
      </div>
    </AuthLayouts>
  );
};

export default Login;
*/
/*
import React, { useState } from "react";
import AuthLayouts from "../../components/Layouts/AuthLayouts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic
    console.log("Logging in with:", email);
  };

  return (
    <AuthLayouts>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="abc@example.com"
            type="text"
            className="p-2 border rounded"
          />

          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Min 8 Characters"
            type="Password"
            className="p-2 border rounded"
          />
        </form>
      </div>
    </AuthLayouts>
  );
};

export default Login;
*/

// import React, { useState } from "react";
// import AuthLayouts from "../../components/Layouts/AuthLayouts";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Input from "../../components/Inputs/Input";
// import { validateEmail } from "../../utils/helper";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   //login handle ker rahe

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError("Please Enter a Valid EmailAddress.");
//       return;
//     }

//     if (!password) {
//       setError("Please enter the Password");
//       return;
//     }

//     setError("");
//     //login API call

//     try {
//       const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
//         email,
//         password,
//       });
//       const { token, user } = response.data;

//       if (token) {
//         localStorage.setItem("token", token);
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     }

//     //  console.log("Logging in with:", email, password);
//   };

//   return (
//     <AuthLayouts>
//       <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
//         <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
//         <p className="text-xs text-slate-700 mt-[5px] mb-6">
//           Please enter your details to log in
//         </p>

//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <Input
//             type="email"
//             label="Email Address"
//             placeholder="abc@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <Input
//             type="password"
//             label="Password"
//             placeholder="Min 8 Characters"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

//           <button type="submit" className="btn-primary">
//             LOGIN
//           </button>

//           <p className="text-[13px] text-slate-800 mt-3">
//             Don't have a account?{""}
//             <Link
//               className="text-violet-600 hover:text-blue-600 hover:underline font-medium transition-colors"
//               to="/SignUp"
//             >
//               SignUp
//             </Link>
//           </p>
//         </form>
//       </div>
//     </AuthLayouts>
//   );
// };

// export default Login;

import React, { useState } from "react";
import AuthLayouts from "../../components/Layouts/AuthLayouts";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
//import axiosInstance from "../../utils/axios"; // Ensure this is imported
import axiosInstance from "../../utils/axiosInstance";
//import API_PATHS from "../../constants/apiPaths"; // Ensure this is imported
//import API_PATHS from "../../utils/apiPaths";
import { API_PATHS } from "../../utils/apiPaths";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please Enter a Valid Email Address.");
      return;
    }

    if (!password) {
      setError("Please enter the Password");
      return;
    }

    setError("");
    //login API
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayouts>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input
            type="email"
            label="Email Address"
            placeholder="abc@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            label="Password"
            placeholder="Min 8 Characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link
              className="text-violet-600 hover:text-blue-600 hover:underline font-medium transition-colors"
              to="/SignUp"
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayouts>
  );
};

export default Login;
