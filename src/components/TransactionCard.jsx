const TransactionCard = (props) => {
  const { transaction } = props;
  const transactiontype = transaction.amount < 0 ? "negative" : "positive";
  return (
    <div key={transaction.id} className={`transaction-card ${transactiontype}`}>
      <span>{transaction.title}</span>
      <span>${transaction.amount}</span>
    </div>
  );
};
export default TransactionCard;
