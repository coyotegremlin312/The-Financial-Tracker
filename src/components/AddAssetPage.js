import React from 'react';
import { connect } from 'react-redux';
import AssetForm from './AssetForm';
import { addAsset } from '../actions/assets';

const AddAssetPage = (props) => (
    <div className="AddEditPage">
        <h1 className="AddEditTitle">Add Asset</h1>
        <AssetForm 
            onSubmit={(asset) => {
                props.dispatch(addAsset(asset));
                props.history.push('/');
              }}
        />
    </div>
);
export default connect()(AddAssetPage);