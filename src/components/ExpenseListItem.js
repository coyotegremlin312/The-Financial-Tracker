import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, fromAccount, createdAt }) => (

  <div className="Item">
      <div className="ListItemLeft">
      <Link to={`/editexpense/${id}` } className="ItemLink">
        <h3><b>{description}</b></h3>
      </Link>
      <p className="AssetContribution"><b>From Account:</b> {fromAccount}</p>
      <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
      </div>
      <p className="ListItemRight">{numeral(amount / 100).format('$0,0.00')}</p>
  </div>
);

export default connect()(ExpenseListItem);