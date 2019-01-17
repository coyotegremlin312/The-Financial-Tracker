import React from 'react';
import { connect } from 'react-redux';
import AssetForm from './AssetForm';
import { startAddAsset } from '../actions/assets';

export class AddAssetPage extends React.Component {
    onSubmit = (asset) => {
      this.props.startAddAsset(asset);
      this.props.history.push('/');
    };
    render() {
      return (
        <div className="AddEditPage">
          <h1 className="AddEditTitle">Add Asset</h1>
          <AssetForm
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    startAddAsset: (asset) => dispatch(startAddAsset(asset))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddAssetPage);