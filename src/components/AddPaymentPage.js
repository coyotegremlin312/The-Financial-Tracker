import React from 'react';
import { connect } from 'react-redux';
import PaymentForm from './PaymentForm';
import { startAddPayment } from '../actions/payments';

export class AddPaymentPage extends React.Component {
    onSubmit = (payment) => {
      this.props.startAddPayment(payment);
      this.props.history.push('/paymentdashboard');
    };
    render() {
      return (
        <div className="AddEditPage">
          <h1 className="AddEditTitle">Add Payment</h1>
          <PaymentForm
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    startAddPayment: (payment) => dispatch(startAddPayment(payment))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddPaymentPage);
