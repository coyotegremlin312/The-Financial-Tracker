import uuid from 'uuid';

export const addDebt = (
    { 
        description = '', 
        amount = 0, 
        createdAt = 0 
        } = {}) => ({
    type: 'ADD_DEBT',
    debt: {
        id: uuid(),
        description,
        amount, 
        createdAt
    }
});

export const removeDebt = ({ id } = {}) => ({
    type: 'REMOVE_DEBT',
    id
});

export const editDebt = (id, updates) => ({
    type: 'EDIT_DEBT',
    id,
    updates
});