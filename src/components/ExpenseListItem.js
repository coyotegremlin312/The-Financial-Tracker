import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, fromAccount, createdAt }) => (

  <div className="Item">
      <Link to={`/editexpense/${id}`}>
        <h3><b>Expense:</b> {description}</h3>
      </Link>
      <p><b>Amount:</b> {numeral(amount / 100).format('$0,0.00')}</p>
      <p><b>From Account:</b> {fromAccount}</p>
      <p><b>Date:</b> {moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
);

export default connect()(ExpenseListItem);