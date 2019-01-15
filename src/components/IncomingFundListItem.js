import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const IncomingFundListItem = ({ id, description, amount, toAsset, createdAt }) => (

  <div className="Item">
      <Link to={`/editincomingfund/${id}`}>
        <h3><b>Incoming Fund:</b> {description}</h3>
      </Link>
      <p><b>Amount:</b> {numeral(amount / 100).format('$0,0.00')}</p>
      <p><b>Date:</b> {moment(createdAt).format('MMMM Do, YYYY')}</p>
      <p><b>To Asset:</b> {toAsset} </p>
  </div>
);

export default connect()(IncomingFundListItem);