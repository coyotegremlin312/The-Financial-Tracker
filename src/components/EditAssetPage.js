import React from 'react';
import { connect } from 'react-redux';
import AssetForm from './AssetForm';
import { startEditAsset, startRemoveAsset } from '../actions/assets';

export class EditAssetPage extends React.Component {
    onSubmit = (asset) => {
      this.props.startEditAsset(this.props.asset.id, asset);
      this.props.history.push('/');
    };
    onRemove = () => {
      this.props.startRemoveAsset({ id: this.props.asset.id });
      this.props.history.push('/');
    };
    render() {
      return (
        <div className="AddEditPage">
          <AssetForm
            asset={this.props.asset}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove</button>
        </div>
      );
    }
  };


const mapStateToProps = (state, props) => {
    return {
      asset: state.assets.find((asset) => asset.id === props.match.params.id)
    };
  };

const mapDispatchToProps = (dispatch, props) => ({
    startEditAsset: (id, asset) => dispatch(startEditAsset(id, asset)),
    startRemoveAsset: (data) => dispatch(startRemoveAsset(data))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(EditAssetPage);