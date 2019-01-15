import React from 'react';
import { connect } from 'react-redux';
import AssetListItem from './AssetListItem';
import selectAssets from '../selectors/assets';

const AssetList = (props) => (
  <div className="ADList">
    <h1>Asset List</h1>
    {props.assets.map((asset) => {
      return <AssetListItem key={asset.id} {...asset} />;
    })}
  </div>
);



const mapStateToProps = (state) => {
  return {
    assets: selectAssets(state.assets, state.filters)
  };
};

export default connect(mapStateToProps)(AssetList);
