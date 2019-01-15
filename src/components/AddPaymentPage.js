import React from 'react';
import { connect } from 'react-redux';
import PaymentForm from './PaymentForm';
import { addPayment } from '../actions/payments';

const AddPaymentPage = (props) => (
    <div className="AddEditPage">
        <h1 className="AddEditTitle">Add Payment</h1>
        <PaymentForm 
            onSubmit={(payment) => {
                props.dispatch(addPayment(payment));
                props.history.push('/paymentdashboard');
              }}
        />
    </div>
);
export default connect()(AddPaymentPage);