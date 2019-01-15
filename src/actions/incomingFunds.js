import uuid from 'uuid';

export const addIncomingFund = (
    { 
        description = '', 
        amount = 0,
        toAsset = '', 
        createdAt = 0 
        } = {}) => ({
    type: 'ADD_INCOMING_FUND',
    incomingFund: {
        id: uuid(),
        description,
        amount,
        toAsset, 
        createdAt
    }
});

export const removeIncomingFund = ({ id } = {}) => ({
    type: 'REMOVE_INCOMING_FUND',
    id
});

export const editIncomingFund = (id, updates) => ({
    type: 'EDIT_INCOMING_FUND',
    id,
    updates
});