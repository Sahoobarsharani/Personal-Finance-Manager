import React, { useState } from 'react';
import { FaWallet, FaArrowUp, FaArrowDown, FaBell, FaChartLine, FaClock } from 'react-icons/fa';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [showNotification, setShowNotification] = useState(false);
  
  const stats = {
    balance: 24500.80,
    income: 32800.00,
    expenses: 8299.20,
    notifications: [
      { id: 1, message: "Large expense detected: $520.00 at Amazon" },
      { id: 2, message: "Monthly budget limit reaching soon" },
      { id: 3, message: "New income received: $3,200.00" }
    ],
    recentTransactions: [
      { id: 1, type: 'expense', amount: 45.99, description: 'Grocery Shopping', date: '2024-02-24' },
      { id: 2, type: 'income', amount: 2500.00, description: 'Salary Deposit', date: '2024-02-23' },
      { id: 3, type: 'expense', amount: 120.50, description: 'Utility Bill', date: '2024-02-22' },
    ]
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Financial Dashboard</h1>
          <div className="header-actions">
            <div className="notification-center">
              <FaBell 
                className="notification-bell"
                onClick={() => setShowNotification(!showNotification)}
              />
              <span className="notification-badge">3</span>
              {showNotification && (
                <div className="notification-popup">
                  <h3>Notifications</h3>
                  {stats.notifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                      {notification.message}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card total-balance">
          <div className="stat-icon">
            <FaWallet />
          </div>
          <div className="stat-details">
            <h3>Total Balance</h3>
            <p className="stat-amount">${stats.balance.toLocaleString()}</p>
            <span className="stat-label">Available Funds</span>
          </div>
        </div>

        <div className="stat-card income">
          <div className="stat-icon">
            <FaArrowUp />
          </div>
          <div className="stat-details">
            <h3>Total Income</h3>
            <p className="stat-amount">${stats.income.toLocaleString()}</p>
            <span className="stat-label">This Month</span>
          </div>
        </div>

        <div className="stat-card expenses">
          <div className="stat-icon">
            <FaArrowDown />
          </div>
          <div className="stat-details">
            <h3>Total Expenses</h3>
            <p className="stat-amount">${stats.expenses.toLocaleString()}</p>
            <span className="stat-label">This Month</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="chart-section">
          <div className="section-header">
            <h2><FaChartLine /> Spending Overview</h2>
            <select className="time-filter">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="chart-placeholder">
            <div className="bar-chart">
              <div className="bar" style={{ height: '60%' }}><span>Mon</span></div>
              <div className="bar" style={{ height: '80%' }}><span>Tue</span></div>
              <div className="bar" style={{ height: '40%' }}><span>Wed</span></div>
              <div className="bar" style={{ height: '90%' }}><span>Thu</span></div>
              <div className="bar" style={{ height: '70%' }}><span>Fri</span></div>
              <div className="bar" style={{ height: '50%' }}><span>Sat</span></div>
              <div className="bar" style={{ height: '30%' }}><span>Sun</span></div>
            </div>
          </div>
        </div>

        <div className="recent-activity">
          <div className="section-header">
            <h2><FaClock /> Recent Activity</h2>
            <button className="view-all">View All</button>
          </div>
          <div className="activity-list">
            {stats.recentTransactions.map(transaction => (
              <div key={transaction.id} className={`activity-item ${transaction.type}`}>
                <div className="activity-icon">
                  {transaction.type === 'income' ? <FaArrowUp /> : <FaArrowDown />}
                </div>
                <div className="activity-details">
                  <h4>{transaction.description}</h4>
                  <span className="activity-date">{transaction.date}</span>
                </div>
                <div className="activity-amount">
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-button">Add Transaction</button>
        <button className="action-button">View Reports</button>
        <button className="action-button">Set Budget</button>
      </div>
    </div>
  );
};

export default Dashboard; 