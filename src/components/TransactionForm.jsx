import { useState } from "react";

const TransactionForm = (props) => {
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTransaction(title, amount);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <div>New Transaction</div>
      <hr></hr>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleTitleChange}></input>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            onChange={handleAmountChange}
          ></input>
        </div>
        <button onClick={handleSubmit}>Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
