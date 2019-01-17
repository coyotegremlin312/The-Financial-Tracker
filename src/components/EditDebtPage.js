import React from 'react';
import { connect } from 'react-redux';
import DebtForm from './DebtForm';
import { editDebt, startRemoveDebt } from '../actions/debts';

export class EditDebtPage extends React.Component {
    onSubmit = (debt) => {
      this.props.editDebt(this.props.debt.id, debt);
      this.props.history.push('/');
    };
    onRemove = () => {
      this.props.startRemoveDebt({ id: this.props.debt.id });
      this.props.history.push('/');
    };
    render() {
      return (
        <div className="AddEditPage">
          <DebtForm
            debt={this.props.debt}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove</button>
        </div>
      );
    }
  };
  

const mapStateToProps = (state, props) => {
    return {
      debt: state.debts.find((debt) => debt.id === props.match.params.id)
    };
  };

const mapDispatchToProps = (dispatch, props) => ({
    editDebt: (id, debt) => dispatch(editDebt(id, debt)),
    startRemoveDebt: (data) => dispatch(startRemoveDebt(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDebtPage);