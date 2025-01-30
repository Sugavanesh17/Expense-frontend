import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Snacks",
      amount: "-20",
    },
    {
      id: 2,
      title: "Salary",
      amount: "300",
    },
    {
      id: 3,
      title: "Book",
      amount: "-10",
    },
    {
      id: 4,
      title: "Camera",
      amount: "-150",
    },
  ]);

  const addTransaction = (title, amount) => {
    console.log("Add =>", title, amount);
    const newTxn = {
      id: transactions.length + 1,
      title: title,
      amount: +amount,
    };
    setTransactions([...transactions, newTxn]);
  };

  useEffect( () => {
    const fetchData =async()=>{
      const response =await axios.get('http://localhost:3000/api/expenses')
      console.log(response.data)
    }
    fetchData();
  }, [transactions]);

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <TransactionList transactions={transactions} />
        <TransactionForm addTransaction={addTransaction} />
      </div>
    </>
  );
};

export default App;
