import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  },0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div>
      <div className={`alert ${alertType} p-4`}>Remaining : ${budget-totalExpenses}</div>
    </div>
  );
};

export default Remaining;
