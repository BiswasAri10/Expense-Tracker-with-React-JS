import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log('clicked!!!');
  };
  /*return React.createElement(
    Card,
    { className: 'expense-item' },
    React.createElement(ExpenseDate, { date: props.date }),
    React.createElement(ExpenseDetails, {
      title: props.title,
      amount: props.amount,
      location: props.location,
    })
  );*/
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={clickHandler}>Delete</button>
    </Card>
  );
}
export default ExpenseItem;