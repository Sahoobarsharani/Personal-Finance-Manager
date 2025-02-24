import React, { useState } from 'react';

const AddTransaction = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    type: 'income',
    category: '',
    amount: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ ...formData, id: Date.now(), date: new Date().toISOString() });
    setFormData({ type: 'income', category: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTransaction;