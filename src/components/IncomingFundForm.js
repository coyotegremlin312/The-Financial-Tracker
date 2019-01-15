import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class IncomingFundForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          description: props.incomingFund ? props.incomingFund.description : '',
          amount: props.incomingFund ? (props.incomingFund.amount / 100).toString() : '',
          toAsset: props.incomingFund ? props.incomingFund.toAsset : '',
          createdAt: props.incomingFund ? moment(props.incomingFund.createdAt) : moment(),
          calendarFocused: false,
          error: ''
        };
      }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(() => ({ amount }));
        }
    };
    onAssetChange = (e) => {
        const toAsset = e.target.value;
        this.setState(() => ({ toAsset }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
          this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.description || !this.state.amount) {
          this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            toAsset: this.state.toAsset,
            createdAt: this.state.createdAt.valueOf(),
          });
        }
      };
      render () {
        return (
            <div className="InputForm">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        className="DescriptionInput"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        className="AmountInput"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <input
                        type="text"
                        placeholder="To Asset"
                        className="ToAssetInput"
                        value={this.state.toAsset}
                        onChange={this.onAssetChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Add Incoming Fund</button>
                </form>
            </div>
        )
    }
}