import React from 'react';
import { connect } from 'react-redux';
import DebtForm from './DebtForm';
import { startAddDebt } from '../actions/debts';

export class AddDebtPage extends React.Component {
    onSubmit = (debt) => {
      this.props.startAddDebt(debt);
      this.props.history.push('/');
    };
    render() {
      return (
        <div className="AddEditPage">
          <h1 className="AddEditTitle">Add Debt</h1>
          <DebtForm
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    startAddDebt: (debt) => dispatch(startAddDebt(debt))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddDebtPage);

