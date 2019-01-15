import React from 'react';
import { connect } from 'react-redux';
import IncomingFundForm from './IncomingFundForm';
import { addIncomingFund } from '../actions/incomingFunds';

const AddIncomingFundPage = (props) => (
    <div className="AddEditPage">
        <h1 className="AddEditTitle">Add Incoming Fund</h1>
        <IncomingFundForm 
            onSubmit={(incomingFund) => {
                props.dispatch(addIncomingFund(incomingFund));
                props.history.push('/incomingfunddashboard');
              }}
        />
    </div>
);
export default connect()(AddIncomingFundPage);