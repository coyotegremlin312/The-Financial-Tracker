import React from 'react';
import { connect } from 'react-redux';
import IncomingFundForm from './IncomingFundForm';
import { startEditIncomingFund, startRemoveIncomingFund } from '../actions/incomingFunds';

export class EditIncomingFundPage extends React.Component {
    onSubmit = (incomingFund) => {
      this.props.startEditIncomingFund(this.props.incomingFund.id, incomingFund);
      this.props.history.push('/incomingfunddashboard');
    };
    onRemove = () => {
      this.props.startRemoveIncomingFund({ id: this.props.incomingFund.id });
      this.props.history.push('/incomingfunddashboard');
    };
    render() {
      return (
        <div className="AddEditPage">
          <IncomingFundForm
            incomingFund={this.props.incomingFund}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove</button>
        </div>
      );
    }
  };

const mapStateToProps = (state, props) => {
    return {
      incomingFund: state.incomingFunds.find((incomingFund) => incomingFund.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditIncomingFund: (id, incomingFund) => dispatch(startEditIncomingFund(id, incomingFund)),
    startRemoveIncomingFund: (data) => dispatch(startRemoveIncomingFund(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditIncomingFundPage);