import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext';

const AddTransaction = () => {
  const { transactions, addTransaction } = useFinance();
  const [formData, setFormData] = useState({ type: 'income', category: '', amount: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.category || !formData.amount || parseFloat(formData.amount) <= 0) {
      alert('Please enter a valid amount and category!');
      return;
    }

    addTransaction({ ...formData, amount: parseFloat(formData.amount), date: new Date().toISOString() });

    setFormData({ type: 'income', category: '', amount: '' }); // Reset form after adding
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
        <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          min="0"
          required
        />

        <button type="submit">Add Transaction</button>
      </form>

      <h2>Transactions</h2>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid black' }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th>#</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount ($)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No transactions yet.</td>
            </tr>
          ) : (
            transactions.map((transaction, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td>{index + 1}</td>
                <td style={{ color: transaction.type === 'income' ? 'green' : 'red' }}>{transaction.type}</td>
                <td>{transaction.category}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
const styles = {
  container: {
    color:'white',
    maxWidth: '700px',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: 'blue',
    fontSize: '22px',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '15px',
    borderRadius: '8px',
    background: '#f8f8f8',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    background: '#28a745',
    color: 'grey',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: '0.3s',
  },
  buttonHover: {
    background: '#218838',
  },
  table: {
    width: '100%',
    marginTop: '20px',
    borderCollapse: 'collapse',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  evenRow: {
    background: '#f9f9f9',
  },
  oddRow: {
    background: '#fff',
  },
  noTransactions: {
    textAlign: 'center',
    padding: '10px',
    fontSize: '16px',
    color: '#777',
  },
};
export default AddTransaction;


