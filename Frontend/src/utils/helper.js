//email validation ke rules
import moment from "moment";
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// export const getInitials = (name) => {
//   if (!name) return "";

//   for (
//     let i = 0;
//     i < Math.min(WebTransportDatagramDuplexStream.length, 2);
//     i++
//   ) {
//     initials += words[i][0];
//   }
//   return initials.toUpperCase();
// };

export const getInitials = (name) => {
  if (!name) return "";
  const words = name.trim().split(" ");
  let initials = "";
  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

// export const prepareExpenseBarChartData = (data = []) => {
//   const charData = data.map((item) => ({
//     category: item?.category,
//     amount: item?.amount,
//   }));
//   return charData;
// };

export const prepareExpenseBarChartData = (data = []) => {
  const dataMap = {};

  data.forEach((item) => {
    if (!dataMap[item.date]) dataMap[item.date] = 0;
    dataMap[item.date] += item.amount;
  });

  return Object.entries(dataMap)
    .map(([date, amount]) => ({ month: date, amount })) // 'month' is just the key for X-axis
    .sort((a, b) => new Date(a.month) - new Date(b.month));
};

//add on
//pie chart 60 wala
export const prepareLast60DaysExpenses = (transactions = []) => {
  const today = new Date();
  const past60Days = new Date();
  past60Days.setDate(today.getDate() - 60);

  const filtered = transactions.filter(
    (t) => new Date(t.date) >= past60Days && new Date(t.date) <= today
  );

  const grouped = {};
  filtered.forEach((t) => {
    const category = t.category || "Others";
    const amount = Number(t.amount) || 0;
    if (grouped[category]) grouped[category] += amount;
    else grouped[category] = amount;
  });

  return Object.entries(grouped).map(([name, amount]) => ({ name, amount }));
};

export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    source: item?.source,
  }));

  return chartData;
};

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};
