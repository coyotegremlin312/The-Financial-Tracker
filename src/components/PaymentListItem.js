import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const PaymentListItem = ({ id, description, amount, fromAsset, createdAt }) => (

  <div className="Item">
      <div className="ListItemLeft">
      <Link to={`/editpayment/${id}`} className="ItemLink">
        <h3><b>{description}</b></h3>
      </Link>
      <p className="AssetContribution"><b>From Asset:</b> {fromAsset} </p>
      <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
      </div>
      <p className="ListItemRight">{numeral(amount / 100).format('$0,0.00')}</p>
  </div>
);

export default connect()(PaymentListItem);