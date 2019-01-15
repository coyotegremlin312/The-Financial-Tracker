import React from 'react';
import { connect } from 'react-redux';
import IncomingFundListItem from './IncomingFundListItem';
import selectIncomingFunds from '../selectors/incomingFunds';

const IncomingFundList = (props) => (
  <div className="List">
    <h1 className="AddEditTitle">Incoming Funds List</h1>
    {props.incomingFunds.map((incomingFund) => {
      return <IncomingFundListItem key={incomingFund.id} {...incomingFund} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    incomingFunds: selectIncomingFunds(state.incomingFunds, state.filters)
  };
};

export default connect(mapStateToProps)(IncomingFundList);