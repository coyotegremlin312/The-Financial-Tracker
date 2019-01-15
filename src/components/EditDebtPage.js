import React from 'react';
import { connect } from 'react-redux';
import DebtForm from './DebtForm';
import { editDebt, removeDebt } from '../actions/debts';

const EditDebtPage = (props) => {
    return (
        <div className="AddEditPage">
            <DebtForm
                debt={props.debt}
                onSubmit={(debt) => {
                    props.dispatch(editDebt(props.debt.id, debt));
                    props.history.push('/');
                }}
            />
        <button onClick={() => {
            props.dispatch(removeDebt({ id: props.debt.id }));
            props.history.push('/');
        }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
      debt: state.debts.find((debt) => debt.id === props.match.params.id)
    };
  };

export default connect(mapStateToProps)(EditDebtPage);