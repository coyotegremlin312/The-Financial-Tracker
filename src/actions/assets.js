import database from '../firebase/firebase'

export const addAsset = (asset) => ({
    type: 'ADD_ASSET',
    asset
});

export const startAddAsset = (assetData = {}) => {
    return (dispatch) => {
        const {
            description = '',  
            amount = 0, 
            createdAt = 0 
        } = assetData;
        const asset = { description, amount, createdAt };

        database.ref('assets').push(asset).then((ref) => {
            dispatch(addAsset({
                id: ref.key,
                ...asset
            }));
        });
    };
};


export const removeAsset = ({ id } = {}) => ({
    type: 'REMOVE_ASSET',
    id
});

export const startRemoveAsset = ({ id } = {}) => {
    return (dispatch) => {
      return database.ref(`assets/${id}`).remove().then(() => {
        dispatch(removeAsset({ id }));
      });
    };
};

export const editAsset = (id, updates) => ({
    type: 'EDIT_ASSET',
    id,
    updates
});

export const setAssets = (assets) => ({
    type: 'SET_ASSETS',
    assets
  });

export const startSetAssets = () => {
    return (dispatch) => {
      return database.ref('assets').once('value').then((snapshot) => {
        const assets = [];
  
        snapshot.forEach((childSnapshot) => {
          assets.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setAssets(assets));
      });
    };
  };