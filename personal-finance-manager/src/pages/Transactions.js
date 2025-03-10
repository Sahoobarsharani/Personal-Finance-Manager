import React, { useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Grocery Shopping', amount: -50, type: 'expense' },
    { id: 2, description: 'Salary', amount: 2000, type: 'income' },
    { id: 3, description: 'Rent', amount: -800, type: 'expense' },
  ]); // Mock data directly here

  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    type: 'expense', // Default to expense
  });

  const handleInputChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = () => {
    if (newTransaction.description.trim() === '' || isNaN(parseFloat(newTransaction.amount))) {
        alert("Please enter a valid description and amount.");
        return; // Don't add if fields are empty or amount is not a number
    }
    const transactionToAdd = {
      id: transactions.length + 1, // Simple ID generation
      description: newTransaction.description,
      amount: parseFloat(newTransaction.amount),
      type: newTransaction.type,
    };
    setTransactions([...transactions, transactionToAdd]);
    setNewTransaction({ description: '', amount: '', type: 'expense' }); // Clear form
  };

  const transactionStyle = (type) => ({
    color: type === 'income' ? 'green' : 'red',
    fontWeight: type === 'income' ? 'bold' : 'normal', // Make income bold
  });

  return (
    <div className="transactions-container">
      <h1>Transactions</h1>

      <div className="add-transaction">
        <h2>Add Transaction</h2>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTransaction.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
        />
        <select name="type" value={newTransaction.type} onChange={handleInputChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button onClick={handleAddTransaction}>Add</button>
      </div>

      <div className="transaction-list">
        <h2>Transaction List</h2>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td style={transactionStyle(transaction.type)}>
                  {transaction.amount.toFixed(2)} {/* Format to 2 decimal places */}
                </td>
                <td>{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .transactions-container {
          font-family: sans-serif;
          padding: 20px;
          display: flex;
          flex-direction: column; /* Stack elements vertically */
          align-items: center; /* Center horizontally */
        }

        .add-transaction, .transaction-list {
          width: 80%; /* Occupy most of the container width */
          margin-bottom: 20px; /* Space between sections */
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.1); /* Add a subtle shadow */
        }

        input, select, button {
          margin-right: 10px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        table {
          width: 100%;
          border-collapse: collapse; /* Collapse table borders */
        }

        th, td {
          padding: 8px;
          border: 1px solid #ccc;
          text-align: left; /* Align text to the left */
        }
        th {
            background-color: #eee;
        }
      `}</style>
    </div>
  );
};

export default Transactions;