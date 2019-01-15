import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const DebtListItem = ({ id, description, amount }) => (

  <div className="ADItem">
      <Link to={`/editdebt/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p><b>Balance:</b> {numeral(amount / 100).format('$0,0.00')}</p>
  </div>
);

export default connect()(DebtListItem);