import React from 'react';
import { connect } from 'react-redux';
import IncomingFundForm from './IncomingFundForm';
import { startAddIncomingFund } from '../actions/incomingFunds';

export class AddIncomingFundPage extends React.Component {
    onSubmit = (incomingFund) => {
      this.props.startAddIncomingFund(incomingFund);
      this.props.history.push('/incomingfunddashboard');
    };
    render() {
      return (
        <div className="AddEditPage">
          <h1 className="AddEditTitle">Add Incoming Fund</h1>
          <IncomingFundForm
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    startAddIncomingFund: (incomingFund) => dispatch(startAddIncomingFund(incomingFund))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddIncomingFundPage);

