import React from 'react';
import moment from 'moment';
import Select from 'react-select'
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import database from '../firebase/firebase';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          description: props.expense ? props.expense.description : '',
          amount: props.expense ? (props.expense.amount / 100).toString() : '',
          dropOptions: [],
          fromAccount: props.expense ? props.expense.fromAccount : '',
          createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
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
    console.log(debtsList);
  });

    }; 
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
    onFromAccountChange = (e) => {
        const fromAccount = e.target.value;
        this.setState(() => ({ fromAccount }));
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
            fromAccount: this.state.fromAccount,
            createdAt: this.state.createdAt.valueOf(),
          });
        }
      };
      render () {
          console.log(this.state)
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
                    <Select
                        className="FromAccountInput"
                        onChange={this.onFromAccountChange}
                        options={this.state.dropOptions}
                    />
                    {/* <input
                        type="text"
                        placeholder="From Account or Asset"
                        value={this.state.fromAccount}
                        onChange={this.onFromAccountChange}
                    /> */}
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}