import TransactionCard from "./TransactionCard";
const TransactionList = (props) => {
  return (
    <>
      <div>History</div>
      <br></br>
      <hr></hr>
      {props.transactions.map((transaction) => {
        return (
          <TransactionCard key={transaction.id} transaction={transaction} />
        );
      })}
    </>
  );
};

export default TransactionList;
