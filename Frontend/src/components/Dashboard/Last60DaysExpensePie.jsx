// import React from "react";
// import CustomPieChart from "../Charts/CustomPieChart";

// // data should be grouped by category: [{category, amount}]
// const Last60DaysExpensePie = ({ data, totalExpense }) => {
//   return (
//     <div className="card col-span-1">
//       <div className="flex items-center justify-between">
//         <h5 className="text-lg">Last 60 Days Expenses</h5>
//       </div>

//       <CustomPieChart
//         data={data}
//         label="Expenses"
//         totalAmount={totalExpense}
//         Colors={["rgba(212, 244, 54, 1)", "#4f39f6", "#D32F2F"]}
//         showTextAnchor
//       />
//     </div>
//   );
// };

// export default Last60DaysExpensePie;
import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const Last60DaysExpensePie = ({ data, totalExpense }) => {
  //  console.log("Last 60 Days Expense Data:", data);
  const transformedData = data.map((item) => ({
    name: item.name,
    amount: item.amount,
  }));
  // console.log("Transformed Data for Pie Chart:", transformedData);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Expenses</h5>
      </div>

      <CustomPieChart
        data={transformedData}
        label="Expenses"
        totalAmount={totalExpense}
        colors={["#e1f436ff", "#737ee5ff", "#D32F2F"]}
        showTextAnchor
      />
    </div>
  );
};
export default Last60DaysExpensePie;
