// import React from "react";
// import { LuArrowRight } from "react-icons/lu";
// import moment from 'moment'
// import TransactionsInfoCard from "../cards/TransactionsInfoCard";

// const RecentTransactions = ({ transactions, onSeeMore }) => {
//   return (
//     <div className="card">
//       <div className="flex items-center justify-between">
//         <h5 className="text-lg">Recent Transactions</h5>

//         <button className="card-btn" onClick={onSeeMore}>
//           See All <LuArrowRight className="text-base" />
//         </button>
//       </div>

//       <div className="mt-6">
//         (transactions?.slice(0,5)?.map((items) => {
//             <TransactionsInfoCard
//                key={IoMdHeartEmpty._id}
//                title={IoMdHeartEmpty.type == 'expense' ? item.category : item.source}
//                icon={item.icon}
//                date={moment(item.date).format("Do MMM YYYY")}
//                amount={item.amount}
//                type={item.type}
//                hideDeleteBtn
//             />

//         )}

//       </div>
//     </div>
//   );
// };

// export default RecentTransactions;

import React from "react";
import { LuArrowRight } from "react-icons/lu";

const RecentTransactions = ({ transactions = [], onSeeMore }) => {
  return (
    <div className="card p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">Recent Transactions</h5>
        <button
          className="card-btn flex items-center gap-1 text-blue-500 hover:text-blue-700"
          onClick={onSeeMore}
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {transactions.length > 0 ? (
          transactions.map((tx, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2 text-sm"
            >
              {/* <span>{tx.source || tx.category}</span>
              <span
                className="font-medium"
                style={{ color: tx.type === "income" ? "green" : "red" }}
              >
                {tx.type === "income" ? "+" : "-"}${tx.amount}
              </span> */}
              <div className="flex flex-col">
                <span className="font-medium">{tx.source || tx.category}</span>
                <span className="text-gray-400 text-xs">
                  {new Date(tx.date).toLocaleDateString()}
                </span>
              </div>
              <span
                className="font-medium"
                style={{ color: tx.type === "income" ? "green" : "red" }}
              >
                {tx.type === "income" ? "+" : "-"}${tx.amount}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No recent transactions</p>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
