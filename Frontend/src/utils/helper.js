//email validation ke rules
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
// utils/helper.js
export const prepareLast60DaysExpenses = (transactions = []) => {
  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  const filtered = transactions.filter(
    (t) => new Date(t.date) >= sixtyDaysAgo && t.type === "expense"
  );

  const grouped = {};

  filtered.forEach((t) => {
    if (grouped[t.category]) {
      grouped[t.category] += Number(t.amount);
    } else {
      grouped[t.category] = Number(t.amount);
    }
  });

  return Object.entries(grouped).map(([name, amount]) => ({ name, amount }));
};
