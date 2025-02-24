import React from 'react';

const TransactionList = ({ transactions }) => {
  // Check if transactions is defined and is an array
  if (!transactions || !Array.isArray(transactions)) {
    return <p>No transactions found.</p>;
  }

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.date}</span>
            <span>{transaction.category}</span>
            <span>{transaction.type === 'income' ? '+' : '-'}${transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;