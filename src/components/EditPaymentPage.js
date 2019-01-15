import React from 'react';
import { connect } from 'react-redux';
import PaymentForm from './PaymentForm';
import { editPayment, removePayment } from '../actions/payments';

const EditPaymentPage = (props) => {
    return (
        <div className="AddEditPage">
            <PaymentForm
                payment={props.payment}
                onSubmit={(payment) => {
                    props.dispatch(editPayment(props.payment.id, payment));
                    props.history.push('/paymentdashboard');
                }}
            />
        <button onClick={() => {
            props.dispatch(removePayment({ id: props.payment.id }));
            props.history.push('/paymentdashboard');
        }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
      payment: state.payments.find((payment) => payment.id === props.match.params.id)
    };
  };

export default connect(mapStateToProps)(EditPaymentPage);