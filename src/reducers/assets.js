const assetReducerDefaultState = [];

export default (state = assetReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ASSET':
            return [
                ...state,
                action.asset
            ];
        case 'REMOVE_ASSET':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_ASSET':
            return state.map((asset) => {
                if(asset.id === action.id){
                    return{
                        ...asset,
                        ...action.updates
                    }
                } else {
                    return asset;
                }
            });
        default:
            return state;
    }
};