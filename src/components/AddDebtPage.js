import React from 'react';
import { connect } from 'react-redux';
import DebtForm from './DebtForm';
import { addDebt } from '../actions/debts';

const AddDebtPage = (props) => (
    <div className="AddEditPage">
        <h1 className="AddEditTitle">Add Debt</h1>
        <DebtForm 
            onSubmit={(debt) => {
                props.dispatch(addDebt(debt));
                props.history.push('/');
              }}
        />
    </div>
);
export default connect()(AddDebtPage);