import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionsInfoCard from "../cards/TransactionsInfoCard";
import moment from "moment";

const RecentIncome = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg">Income</h5>

        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionsInfoCard
            key={item._id}
            titile={item.source}
            icon={item.icon}
            date={moment(item.date).format("Do MMM YYYY")}
            amount={item.amount}
            type="income"
            hideDeletionBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentIncome;
