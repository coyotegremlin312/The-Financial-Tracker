import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showIncomingFund: false,
        showExpense: false,
        showPayment: false,
      };
      this.showIncomingFund = this.showIncomingFund.bind(this);
      this.closeIncomingFund = this.closeIncomingFund.bind(this);
      this.showExpense = this.showExpense.bind(this);
      this.closeExpense = this.closeExpense.bind(this);
      this.showPayment = this.showPayment.bind(this);
      this.closePayment = this.closePayment.bind(this);
    }
    
    showIncomingFund(event) {
      this.setState({ showIncomingFund: true }, () => {
        document.addEventListener('click', this.closeIncomingFund);
      });
    }
    
    closeIncomingFund() {
      this.setState({ showIncomingFund: false }, () => {
        document.removeEventListener('click', this.closeIncomingFund);
      });
    }

    showExpense(event) {
        this.setState({ showExpense: true }, () => {
          document.addEventListener('click', this.closeExpense);
        });
      }
      
      closeExpense() {
        this.setState({ showExpense: false }, () => {
          document.removeEventListener('click', this.closeExpense);
        });
      }

      showPayment(event) {
        this.setState({ showPayment: true }, () => {
          document.addEventListener('click', this.closePayment);
        });
      }
      
      closePayment() {
        this.setState({ showPayment: false }, () => {
          document.removeEventListener('click', this.closePayment);
        });
      }
  
    render() {
      return (
        <div className="Links">
        <NavLink to="/" activeClassName="is-active" exact={true} className="HomeLink">Home</NavLink>
        <NavLink to="/addasset" activeClassName="is-active" className="Help">Add Asset</NavLink>
        <NavLink to="/adddebt" activeClassName="is-active" className="Help">Add Debt</NavLink>
          <button onClick={this.showIncomingFund}>
            Incoming Funds
          </button>
          {
              this.state.showIncomingFund
              ? (
                <div className="DropMenu">
                  <NavLink to="/incomingfunddashboard" activeClassName="is-active">Incoming Funds Dashboard</NavLink>
                  <NavLink to="/addincomingfund" activeClassName="is-active">Add Incoming Fund</NavLink>
                </div>
              )
              : (
                null
              )
          }
          <button onClick={this.showExpense}>
            Expenses
          </button>
          {
              this.state.showExpense
              ? (
                <div className="DropMenu">
                  <NavLink to="/expensedashboard" activeClassName="is-active">Expense Dashboard</NavLink>
                  <NavLink to="/addexpense" activeClassName="is-active">Add Expense</NavLink>
                </div>
              )
              : (
                null
              )
          }
          <button onClick={this.showPayment}>
            Payments
          </button>
          {
              this.state.showPayment
              ? (
                <div className="DropMenu">
                  <NavLink to="/paymentdashboard" activeClassName="is-active">Payment Dashboard</NavLink>
                  <NavLink to="/addpayment" activeClassName="is-active">Add Payment</NavLink>
                </div>
              )
              : (
                null
              )
          }
          <NavLink to="/help" activeClassName="is-active" className="Help">Help</NavLink>
        </div>
      );
    }
  }

export default NavBar;