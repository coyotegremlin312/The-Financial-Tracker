import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          description: props.payment ? props.payment.description : '',
          amount: props.payment ? (props.payment.amount / 100).toString() : '',
          fromAsset: props.payment ? props.payment.fromAsset : '',
          createdAt: props.payment ? moment(props.payment.createdAt) : moment(),
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
    onFromAssetChange = (e) => {
        const fromAsset = e.target.value;
        this.setState(() => ({ fromAsset }));
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
            fromAsset: this.state.fromAsset,
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
                        placeholder="To Account"
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
                        placeholder="From Asset"
                        className="DescriptionInput"
                        value={this.state.fromAsset}
                        onChange={this.onFromAssetChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Add Payment</button>
                </form>
            </div>
        )
    }
}