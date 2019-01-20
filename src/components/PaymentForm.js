import React from 'react';
import moment from 'moment';
import Select from 'react-select';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import database from '../firebase/firebase';

export default class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          description: props.payment ? props.payment.description : '',
          amount: props.payment ? (props.payment.amount / 100).toString() : '',
          dropOptions: [],
          dropOptionsAsset: [],
          fromAsset: props.payment ? props.payment.fromAsset : '',
          createdAt: props.payment ? moment(props.payment.createdAt) : moment(),
          calendarFocused: false,
          error: ''
        };
      }
      componentDidMount = () => {
        database.ref('debts')
        .on('value', (ashley) => {
            const debtsList = [];
        ashley.forEach((childAshley) => {
            let boom = childAshley.val();
            debtsList.push({
        value: boom.description,
        label: boom.description
      })
      this.setState(() => ({ dropOptions: debtsList }));
        })
    });
        database.ref('assets')
        .on('value', (ashley) => {
            const assetsList = [];
        ashley.forEach((childAshley) => {
            let boom = childAshley.val();
            assetsList.push({
                value: boom.description,
                label: boom.description
            })
        this.setState(() => ({ dropOptionsAsset: assetsList }));
    })
    });
    };
    onDescriptionChange = (e) => {
        const description = e.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(() => ({ amount }));
        }
    };
    onFromAssetChange = (e) => {
        const fromAsset = e.value;
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
                    <Select
                        defaultInputValue="To Account"
                        className="DescriptionInput"
                        value= {{label: this.state.description, value: this.state.description}}
                        onChange={this.onDescriptionChange}
                        options={this.state.dropOptions}
                    />
                    <Select
                        defaultInputValue="From Asset"
                        className="DescriptionInput"
                        value= {{label: this.state.fromAsset, value: this.state.fromAsset}}
                        onChange={this.onFromAssetChange}
                        options={this.state.dropOptionsAsset}
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