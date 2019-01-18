import React from 'react';
import { connect } from 'react-redux';
import DebtListItem from './DebtListItem';
import selectDebts from '../selectors/debts';

const DebtList = (props) => (
  <div className="ADList">
    <div className="ADListTop">
      <p className="ListTopLabels">Debt</p>
      <p className="ListTopLabels">Amount</p>
    </div>
    {props.debts.map((debt) => {
      return <DebtListItem key={debt.id} {...debt} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    debts: selectDebts(state.debts, state.filters)
  };
};

export default connect(mapStateToProps)(DebtList);