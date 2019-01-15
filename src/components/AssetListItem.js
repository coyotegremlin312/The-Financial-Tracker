import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const AssetListItem = ({ id, description, amount }) => (

  <div className="ADItem">
      <Link to={`/editasset/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p><b>Current Moola:</b> {numeral(amount / 100).format('$0,0.00')}</p>
  </div>
);

export default connect()(AssetListItem);