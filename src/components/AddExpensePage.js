import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div className="AddEditPage">
        <h1 className="AddEditTitle">Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/expensedashboard');
              }}
        />
    </div>
);
export default connect()(AddExpensePage);