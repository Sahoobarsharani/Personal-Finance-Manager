import React from 'react';
import { useFinance } from '../context/FinanceContext';

const Transactions = () => {
  const { transactions, deleteTransaction } = useFinance();

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((t) => (
          <li key={t._id}>
            {t.category} - {t.amount} ({t.type})
            <button onClick={() => deleteTransaction(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
