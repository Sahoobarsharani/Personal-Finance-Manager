import React, { useState } from 'react';

const Reports = () => {
  const [reportType, setReportType] = useState('summary'); // Default report type
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const generateReport = () => {
    // In a real application, you would fetch data based on the reportType,
    // startDate, and endDate.  For this example, we'll use mock data.

    // Basic validation (you can enhance this)
    if (!startDate || !endDate) {
        alert("Please select start and end dates.");
        return; // Don't generate if dates are missing
    }

    const mockReportData = generateMockReport(reportType, startDate, endDate); // See function below

    // For now, just log the report data to the console.
    // Replace this with your actual report display logic.
    console.log("Generated Report:", mockReportData);

    // In a real app, you would likely update state with the report data
    // and then render the report (e.g., using a table or charts).
  };


  const generateMockReport = (type, start, end) => {
    // Mock report generation logic
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);

    const mockTransactions = [ // Example transactions
        { date: '2024-07-26', description: 'Grocery', amount: -50, type: 'expense' },
        { date: '2024-07-27', description: 'Salary', amount: 2000, type: 'income' },
        { date: '2024-07-28', description: 'Rent', amount: -800, type: 'expense' },
        { date: '2024-07-29', description: 'Movie', amount: -30, type: 'expense' },
        { date: '2024-07-30', description: 'Bonus', amount: 500, type: 'income' },
    ];

    const filteredTransactions = mockTransactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= startDateObj && transactionDate <= endDateObj;
    });



    if (type === 'summary') {
      let totalIncome = 0;
      let totalExpenses = 0;

      filteredTransactions.forEach(transaction => {
          if (transaction.type === 'income') {
              totalIncome += transaction.amount;
          } else {
              totalExpenses += Math.abs(transaction.amount); // Ensure expenses are positive
          }
      });

      return {
        startDate: start,
        endDate: end,
        totalIncome,
        totalExpenses,
        netBalance: totalIncome - totalExpenses,
      };
    } else if (type === 'detailed') {
      return {
        startDate: start,
        endDate: end,
        transactions: filteredTransactions, // Include transactions in detailed report
      };
    }
    return {}; // Default case
  };


  return (
    <div className="reports-container">
      <h1>Reports</h1>

      <div className="report-options">
        <label htmlFor="reportType">Report Type:</label>
        <select
          id="reportType"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="summary">Summary</option>
          <option value="detailed">Detailed</option>
        </select>

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button onClick={generateReport}>Generate Report</button>
      </div>

      <div className="report-display">
        {/* This is where you would display the generated report. */}
        {/* You could use a table, charts, or other components. */}
        {/* For this example, we're just logging to the console. */}
        <p>Report will be displayed here.</p> {/* Placeholder */}

      </div>

      <style jsx>{`
        .reports-container {
          font-family: sans-serif;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .report-options {
          display: flex;
          flex-direction: column; /* Stack labels and inputs */
          width: 80%; /* Occupy most of the container width */
          margin-bottom: 20px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
        }

        .report-options label {
            margin-bottom: 5px;
        }

        .report-options input, .report-options select {
          margin-bottom: 10px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .report-options button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .report-display {
            width: 80%; /* Occupy most of the container width */
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
        }

      `}</style>
    </div>
  );
};

export default Reports;