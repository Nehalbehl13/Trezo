import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

// data should be grouped by category: [{category, amount}]
const Last60DaysExpensePie = ({ data, totalExpense }) => {
  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Expenses</h5>
      </div>

      <CustomPieChart
        data={data}
        label="Expenses"
        totalAmount={totalExpense}
        Colors={["#F44336", "#E57373", "#D32F2F"]}
        showTextAnchor
      />
    </div>
  );
};

export default Last60DaysExpensePie;
