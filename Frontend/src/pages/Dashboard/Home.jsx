// import React, { useEffect, useState } from "react";
// import DashboardLayout from "../../components/Layouts/DashboardLayout";
// import { useUserAuth } from "../../hooks/useUserAuth";
// import { useNavigate } from "react-router-dom";
// import { API_PATHS } from "../../utils/apiPaths";
// import axiosInstance from "../../utils/axiosInstance";
// import InfoCard from "../../components/cards/InfoCard";

// import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
// import { IoMdCard } from "react-icons/io";
// import { addThousandsSeparator } from "../../utils/helper";
// import RecentTransactions from "../../components/Dashboard/RecentTransactions";
// import FinanceOverview from "../../components/Dashboard/FinanceOverview";

// const Home = () => {
//   useUserAuth();

//   const navigate = useNavigate();

//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchDashboardData = async () => {
//     if (loading) return;

//     setLoading(true);

//     try {
//       const response = await axiosInstance.get(
//         `${API_PATHS.DASHBOARD.GET_DATA}`
//       );

//       if (response.data) {
//         setDashboardData(response.data);
//       }
//     } catch (error) {
//       console.log("Something went wrong. Please try again.", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();
//     return () => {};
//   }, []);

//   return (
//     <DashboardLayout activeMenu="Dashboard">
//       <div className="my-5 mx-auto">
//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
//           <InfoCard
//             icon={<IoMdCard />}
//             label="Total Balance"
//             value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
//             color="bg-purple-500"
//           />

//           <InfoCard
//             icon={<LuWalletMinimal />}
//             label="Total Income"
//             value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
//             color="bg-green-500"
//           />

//           <InfoCard
//             icon={<LuHandCoins />}
//             label="Total Expense"
//             value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
//             color="bg-red-500"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           {/* <RecentTransactions
//             transactions={dashboardData?.RecentTransactions}
//             onSeeMore={() => navigate("/expense")}
//           />

//         <FinanceOverview
//             totalBalance={dashboardData?.totalBalance || 0}
//             totalIncome={dashboardData?.totalIncome || 0}
//             totalExpense={dashboardData?.totalExpense || 0}

//         /> */}

//         <ExpenseTransactions
//             transactions={dashboardData?.last30DaysExpenses?.transactions || [] }
//             onSeeMore={() => navigate("/expense")}
//         />

//          <last30DaysExpenses
//             data={dashboardData?.last30DaysExpenses?.transactions || [] }
//             onSeeMore={() => navigate("/expense")}
//         />

//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import DashboardLayout from "../../components/Layouts/DashboardLayout";
// import { useUserAuth } from "../../hooks/useUserAuth";
// import { useNavigate } from "react-router-dom";
// import { API_PATHS } from "../../utils/apiPaths";
// import axiosInstance from "../../utils/axiosInstance";
// import CustomPieChart from "../../components/Charts/CustomPieChart";
// //import ExpenseTransactions from "../../components/Transactions/ExpenseTransactions";
// import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";

// import Last30DaysExpenses from "./last30DaysExpenses"; // ✅ corrected import

// const Home = () => {
//   const { user } = useUserAuth();
//   const navigate = useNavigate();

//   const [dashboardData, setDashboardData] = useState(null);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         // const res = await axiosInstance.get(API_PATHS.DASHBOARD);
//         const res = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);

//         setDashboardData(res.data);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {/* Income Pie Chart */}
//         <div className="card col-span-1">
//           <CustomPieChart
//             data={dashboardData?.incomeCategories || []}
//             label="Income"
//             totalAmount={dashboardData?.totalIncome || 0}
//             Colors={["#4CAF50", "#81C784", "#388E3C"]}
//             showTextAnchor
//           />
//         </div>

//         {/* Expense Pie Chart */}
//         <div className="card col-span-1">
//           <CustomPieChart
//             data={dashboardData?.expenseCategories || []}
//             label="Expenses"
//             totalAmount={dashboardData?.totalExpenses || 0}
//             Colors={["#F44336", "#E57373", "#D32F2F"]}
//             showTextAnchor
//           />
//         </div>

//         {/* Last 30 Days Expenses */}
//         <Last30DaysExpenses
//           data={dashboardData?.last30DaysExpenses?.transactions || []}
//         />

//         {/* Recent Expense Transactions */}
//         <ExpenseTransactions
//           data={dashboardData?.recentTransactions || []}
//           onSeeMore={() => navigate("/expense")}
//         />
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import DashboardLayout from "../../components/Layouts/DashboardLayout";
// import { useUserAuth } from "../../hooks/useUserAuth";
// import { useNavigate } from "react-router-dom";
// import { API_PATHS } from "../../utils/apiPaths";
// import axiosInstance from "../../utils/axiosInstance";
// import CustomPieChart from "../../components/Charts/CustomPieChart";
// import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";
// import Last30DaysExpenses from "./last30DaysExpenses";
// import InfoCard from "../../components/cards/InfoCard";
// import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
// import { IoMdCard } from "react-icons/io";
// import { addThousandsSeparator } from "../../utils/helper";

// const Home = () => {
//   const { user } = useUserAuth();
//   const navigate = useNavigate();
//   const [dashboardData, setDashboardData] = useState(null);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const res = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
//         setDashboardData(res.data);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       }
//     };
//     fetchDashboardData();
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
//         {/* Info Cards */}
//         <InfoCard
//           icon={<IoMdCard />}
//           label="Total Balance"
//           value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
//           color="bg-purple-500"
//         />
//         <InfoCard
//           icon={<LuWalletMinimal />}
//           label="Total Income"
//           value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
//           color="bg-green-500"
//         />
//         <InfoCard
//           icon={<LuHandCoins />}
//           label="Total Expense"
//           value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
//           color="bg-red-500"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {/* Income Pie Chart */}
//         <div className="card col-span-1">
//           <CustomPieChart
//             data={dashboardData?.incomeCategories || []}
//             label="Income"
//             totalAmount={dashboardData?.totalIncome || 0}
//             Colors={["#4CAF50", "#81C784", "#388E3C"]}
//             showTextAnchor
//           />
//         </div>

//         {/* Expense Pie Chart */}
//         <div className="card col-span-1">
//           <CustomPieChart
//             data={dashboardData?.expenseCategories || []}
//             label="Expenses"
//             totalAmount={dashboardData?.totalExpenses || 0}
//             Colors={["#F44336", "#E57373", "#D32F2F"]}
//             showTextAnchor
//           />
//         </div>

//         {/* Last 30 Days Expenses */}
//         <div className="card col-span-1 xl:col-span-1">
//           <Last30DaysExpenses
//             data={dashboardData?.last30DaysExpenses?.transactions || []}
//           />
//         </div>

//         {/* Recent Expense Transactions */}
//         <div className="card col-span-1 md:col-span-2 xl:col-span-3">
//           <ExpenseTransactions
//             data={dashboardData?.recentTransactions || []}
//             onSeeMore={() => navigate("/expense")}
//           />
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import CustomPieChart from "../../components/Charts/CustomPieChart";
import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/Dashboard/last30DaysExpenses";
import InfoCard from "../../components/cards/InfoCard";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import Last60DaysExpensePie from "../../components/Dashboard/Last60DaysExpensePie";
import {
  prepareLast60DaysExpenses,
  addThousandsSeparator,
} from "../../utils/helper";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { useMemo } from "react";
import AIAdvisor from "../../components/Dashboard/AIAdvisor";

const Home = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
        setDashboardData(res.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchDashboardData();
  }, []);

  const last60DaysData = useMemo(() => {
    if (!dashboardData) return [];
    return prepareLast60DaysExpenses(dashboardData.recentTransactions);
  }, [dashboardData]);

  const totalLast60DaysExpense = useMemo(() => {
    return last60DaysData.reduce((sum, t) => sum + t.amount, 0);
  }, [last60DaysData]);
  return (
    <DashboardLayout>
      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
        <InfoCard
          icon={<IoMdCard />}
          label="Total Balance"
          value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
          color="bg-purple-500"
        />
        <InfoCard
          icon={<LuWalletMinimal />}
          label="Total Income"
          value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
          color="bg-green-500"
        />
        <InfoCard
          icon={<LuHandCoins />}
          label="Total Expense"
          value={addThousandsSeparator(dashboardData?.totalExpenses || 0)}
          color="bg-red-500"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Income Pie Chart */}
        <div className="card col-span-1">
          <CustomPieChart
            data={dashboardData?.incomeCategories || []}
            label="Income"
            totalAmount={dashboardData?.totalIncome || 0}
            Colors={["#4CAF50", "#81C784", "#388E3C"]}
            showTextAnchor
          />
        </div>

        {/* Expense Pie Chart */}
        <div className="card col-span-1">
          <CustomPieChart
            data={dashboardData?.expenseCategories || []}
            label="Expenses"
            totalAmount={dashboardData?.totalExpenses || 0}
            Colors={["#F44336", "#E57373", "#D32F2F"]}
            showTextAnchor
          />
        </div>

        {/* Finance Bar Graph */}
        <div className="card col-span-1">
          <FinanceOverview
            totalBalance={dashboardData?.totalBalance || 0}
            totalIncome={dashboardData?.totalIncome || 0}
            totalExpense={dashboardData?.totalExpenses || 0}
          />
        </div>

        {/* Last 30 Days Expenses */}
        <div className="card col-span-1 xl:col-span-1">
          <Last30DaysExpenses
            data={dashboardData?.last30DaysExpenses?.transactions || []}
          />
        </div>

        {/* Last 60 Days Expense Pie Chart */}
        <Last60DaysExpensePie
          data={last60DaysData}
          total={totalLast60DaysExpense}
        />

        {/* Recent Transactions (All) */}
        <div className="card col-span-1 md:col-span-2 xl:col-span-3">
          <RecentTransactions
            transactions={dashboardData?.recentTransactions || []}
            onSeeMore={() => navigate("/expense")}
          />
        </div>

        {/* Trezo Financial Advisor Section */}
        <div className="card col-span-1 md:col-span-2 xl:col-span-3 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl shadow-lg border border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold text-purple-800">
              🤖 Trezo Financial Advisor
            </h5>
            <span className="text-sm text-purple-600">
              Get instant insights!
            </span>
          </div>
          <input
            type="text"
            placeholder="Ask me about your finances..."
            className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
          />
          <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300">
            Trezo
          </button>
          <div className="mt-4 p-3 bg-white border border-purple-200 rounded-lg text-gray-700 min-h-[60px]">
            Your Trezo answer will appear here.
          </div>
        </div>

        {/* Expense Transactions (Filtered) */}
        {/* <div className="card col-span-1 md:col-span-2 xl:col-span-3">
          <ExpenseTransactions
            data={
              dashboardData?.recentTransactions?.filter(
                (t) => t.type === "expense"
              ) || []
            }
            onSeeMore={() => navigate("/expense")}
          />
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default Home;
