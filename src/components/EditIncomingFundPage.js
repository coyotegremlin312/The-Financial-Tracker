import React from 'react';
import { connect } from 'react-redux';
import IncomingFundForm from './IncomingFundForm';
import { editIncomingFund, removeIncomingFund } from '../actions/incomingFunds';

const EditIncomingFundPage = (props) => {
    return (
        <div className="AddEditPage">
            <IncomingFundForm
                incomingFund={props.incomingFund}
                onSubmit={(incomingFund) => {
                    props.dispatch(editIncomingFund(props.incomingFund.id, incomingFund));
                    props.history.push('/incomingfunddashboard');
                }}
            />
        <button onClick={() => {
            props.dispatch(removeIncomingFund({ id: props.incomingFund.id }));
            props.history.push('/incomingfunddashboard');
        }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
      incomingFund: state.incomingFunds.find((incomingFund) => incomingFund.id === props.match.params.id)
    };
  };

export default connect(mapStateToProps)(EditIncomingFundPage);