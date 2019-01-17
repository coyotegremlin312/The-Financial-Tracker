import React from 'react';
import { connect } from 'react-redux';
import PaymentForm from './PaymentForm';
import { editPayment, startRemovePayment } from '../actions/payments';

export class EditPaymentPage extends React.Component {
    onSubmit = (payment) => {
      this.props.editPayment(this.props.payment.id, payment);
      this.props.history.push('/paymentdashboard');
    };
    onRemove = () => {
      this.props.startRemovePayment({ id: this.props.payment.id });
      this.props.history.push('/paymentdashboard');
    };
    render() {
      return (
        <div className="AddEditPage">
          <PaymentForm
            payment={this.props.payment}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove</button>
        </div>
      );
    }
};

const mapStateToProps = (state, props) => {
    return {
      payment: state.payments.find((payment) => payment.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editPayment: (id, payment) => dispatch(editPayment(id, payment)),
    startRemovePayment: (data) => dispatch(startRemovePayment(data))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(EditPaymentPage);