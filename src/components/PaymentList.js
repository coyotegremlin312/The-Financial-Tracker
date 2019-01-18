import React from 'react';
import { connect } from 'react-redux';
import PaymentListItem from './PaymentListItem';
import selectPayments from '../selectors/payments';

const PaymentList = (props) => (
  <div className="List">
    <div className="ListTop">
      <p className="ListTopLabels">Payment</p>
      <p className="ListTopLabels">Amount</p>
    </div>
    {props.payments.map((payment) => {
      return <PaymentListItem key={payment.id} {...payment} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    payments: selectPayments(state.payments, state.filters)
  };
};

export default connect(mapStateToProps)(PaymentList);