import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const DebtListItem = ({ id, description, amount }) => (

  <div className="ADItem">
    <div className="ListItemLeft">
      <Link to={`/editdebt/${id}`} className="ItemLink">
        <h3>{description}</h3>
      </Link>
    </div>
      <p className="ListItemRight">{numeral(amount / 100).format('$0,0.00')}</p>
  </div>
);

export default connect()(DebtListItem);