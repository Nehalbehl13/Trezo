// import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import SignUp from "./pages/Auth/SignUp";
// import Login from "./pages/Auth/Login";
// import Home from "./pages/Dashboard/Home";
// import Income from "./pages/Dashboard/Income";
// import Expense from "./pages/Dashboard/Expense";
// import UserProvider from "./context/UserContext";

// const App = () => {
//   return (
//     <UserProvider>
//       <div>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Root />} />
//             <Route path="/Login" exact element={<Login />} />
//             <Route path="/SignUp" exact element={<SignUp />} />
//             <Route path="/Dashboard" exact element={<Home />} />
//             <Route path="/Income" exact element={<Income />} />
//             <Route path="/Expense" exact element={<Expense />} />
//           </Routes>
//         </Router>
//       </div>
//     </UserProvider>
//   );
// };

// export default App;

// const Root = () => {
//   //check karo ki local storage mein token hai
//   const isAuthenticated = !!localStorage.getItem("token");

//   //agar milgaya toh dashboard pe bhej do verna login pe
//   return isAuthenticated ? (
//     <Navigate to="/Dashboard" />
//   ) : (
//     <Navigate to="/Login" />
//   );
// };

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          <Route path="/Dashboard" exact element={<Home />} />
          <Route path="/Income" exact element={<Income />} />
          <Route path="/Expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/Dashboard" />
  ) : (
    <Navigate to="/Login" />
  );
};
