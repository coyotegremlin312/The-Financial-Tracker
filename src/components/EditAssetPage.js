import React from 'react';
import { connect } from 'react-redux';
import AssetForm from './AssetForm';
import { editAsset, removeAsset } from '../actions/assets';

const EditAssetPage = (props) => {
    return (
        <div className="AddEditPage">
            <AssetForm
                asset={props.asset}
                onSubmit={(asset) => {
                    props.dispatch(editAsset(props.asset.id, asset));
                    props.history.push('/');
                }}
            />
        <button onClick={() => {
            props.dispatch(removeAsset({ id: props.asset.id }));
            props.history.push('/');
        }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
      asset: state.assets.find((asset) => asset.id === props.match.params.id)
    };
  };

export default connect(mapStateToProps)(EditAssetPage);