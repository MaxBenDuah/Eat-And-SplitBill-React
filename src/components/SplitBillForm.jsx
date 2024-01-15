import React, { useState } from "react";
import Button from "./Button";

const SplitBillForm = function ({ selectedFriend, onSplitBill }) {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whoIsPaying, setWhosPaying] = useState("user");

  const friendExpense = amount * quantity - userExpense;

  const displayTotal = quantity * amount;

  const options = {
    style: "currency",
    currency: "USD",
  };

  const total = new Intl.NumberFormat(navigator.language, options).format(
    displayTotal
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !userExpense) return;

    const value = whoIsPaying === "user" ? friendExpense : -userExpense;

    onSplitBill(value);
  };

  return (
    <form onSubmit={handleSubmit} className="split--bill--form">
      <div className="item">
        <p>Item</p>
        <input className="description" type="text" placeholder="Pizza" />

        <div className="num--and--amt">
          <div>
            <select
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="amt">
            <p>$</p>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="expense">
        <p>Your expense</p>
        <input
          type="text"
          value={userExpense}
          onChange={(e) =>
            setUserExpense(
              +e.target.value > displayTotal ? userExpense : +e.target.value
            )
          }
        />

        <p>{selectedFriend.name}'s Expense</p>
        <input type="text" disabled value={friendExpense} />

        <p>Who's paying the bill</p>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhosPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option key={selectedFriend.id} value="friend">
            {selectedFriend.name}
          </option>
        </select>
      </div>

      <div className="summary">
        <div className="sum">
          <p>Summary</p>
          <div className="total">
            <p>Subtotal</p>
            <p className="amt">{total}</p>
          </div>
        </div>
        <Button className="btn btn--left btn--split--bill">Split Bill</Button>
      </div>
    </form>
  );
};

export default SplitBillForm;
