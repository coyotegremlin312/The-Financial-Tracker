import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const IncomingFundListItem = ({ id, description, amount, toAsset, createdAt }) => (

  <div className="Item">
      <div className="ListItemLeft">
      <Link to={`/editincomingfund/${id}`} className="ItemLink">
        <h3><b>{description}</b></h3>
      </Link>
      <p className="AssetContribution"><b>To Asset:</b> {toAsset} </p>
      <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
      </div>
      <p className="ListItemRight">{numeral(amount / 100).format('$0,0.00')}</p>
  </div>
);

export default connect()(IncomingFundListItem);