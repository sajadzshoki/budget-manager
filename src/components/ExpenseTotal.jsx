import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const {expenses ,budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  },0);
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-dark';
  return (
    <div>
      <div className={`alert p-4 ${alertType}`}>Spent so far : ${totalExpenses}</div>
    </div>
  );
};

export default ExpenseTotal;
