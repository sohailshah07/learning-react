import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date_day">{month}</div>
      <div className="expense-date_month">{day}</div>
      <div className="expense-date_year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
