import uuid from 'uuid';

export const addAsset = (
    { 
        description = '',  
        amount = 0, 
        createdAt = 0 
        } = {}) => ({
    type: 'ADD_ASSET',
    asset: {
        id: uuid(),
        description,
        amount, 
        createdAt
    }
});

export const removeAsset = ({ id } = {}) => ({
    type: 'REMOVE_ASSET',
    id
});

export const editAsset = (id, updates) => ({
    type: 'EDIT_ASSET',
    id,
    updates
});