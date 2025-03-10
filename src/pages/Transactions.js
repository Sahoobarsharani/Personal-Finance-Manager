import React from 'react';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';

const Transactions = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <AddTransaction />
      <TransactionList />
    </div>
  );
};

export default Transactions; 