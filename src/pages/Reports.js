import React from 'react';
import { useFinance } from '../context/FinanceContext';

const Report = () => {
  const { transactions } = useFinance();

  // Calculate total income, expenses, and balance
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const netBalance = totalIncome - totalExpense;

  // Category-wise summary
  const categorySummary = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = { income: 0, expense: 0 };
    }
    acc[transaction.category][transaction.type] += transaction.amount;
    return acc;
  }, {});

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 Financial Report</h2>

      <div style={styles.summary}>
        <div style={{ ...styles.box, background: '#d4edda', color: '#155724' }}>
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div style={{ ...styles.box, background: '#f8d7da', color: '#721c24' }}>
          <h3>Total Expenses</h3>
          <p>${totalExpense.toFixed(2)}</p>
        </div>
        <div style={{ ...styles.box, background: netBalance >= 0 ? '#cce5ff' : '#f8d7da', color: '#004085' }}>
          <h3>Net Balance</h3>
          <p>${netBalance.toFixed(2)}</p>
        </div>
      </div>

      <h3 style={styles.heading}>📌 Category-wise Summary</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Income ($)</th>
            <th>Expense ($)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categorySummary).length === 0 ? (
            <tr>
              <td colSpan="3" style={styles.noData}>No transactions yet.</td>
            </tr>
          ) : (
            Object.entries(categorySummary).map(([category, { income, expense }], index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td>{category}</td>
                <td style={{ color: 'green' }}>${income.toFixed(2)}</td>
                <td style={{ color: 'red' }}>${expense.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

// Styles for better UI
const styles = {
  container: {
    maxWidth: '700px',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#333',
    fontSize: '22px',
    marginBottom: '15px',
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  box: {
    padding: '15px',
    borderRadius: '8px',
    fontWeight: 'bold',
    minWidth: '150px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
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
  noData: {
    textAlign: 'center',
    padding: '10px',
    fontSize: '16px',
    color: '#777',
  },
};

export default Report;
