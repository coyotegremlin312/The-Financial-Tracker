import React from 'react';
import { connect } from 'react-redux';
import DebtListItem from './DebtListItem';
import selectDebts from '../selectors/debts';

const DebtList = (props) => (
  <div className="ADList">
    <h1>Debt List</h1>
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