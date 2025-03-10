export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const calculateStats = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.amount;
    } else {
      acc.expenses += transaction.amount;
    }
    acc.balance = acc.income - acc.expenses;
    return acc;
  }, { income: 0, expenses: 0, balance: 0 });
}; 