import React, { createContext, useContext, useState } from 'react';

const FinanceContext = createContext();

export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]); // Stores transactions

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]); // Correctly updates state
  };
// ✅ Delete transaction
const deleteTransaction = async (id) => {
  await fetch(`http://localhost:5000/transactions/${id}`, { method: 'DELETE' });

  // Update state after deletion
  setTransactions(transactions.filter(transaction => transaction._id !== id));
};

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};
