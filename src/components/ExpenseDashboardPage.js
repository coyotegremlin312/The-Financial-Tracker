import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <div className="Dashboard"><ExpenseListFilters /></div>
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
