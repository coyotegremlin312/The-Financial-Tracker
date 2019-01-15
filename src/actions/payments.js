import uuid from 'uuid';

export const addPayment = (
    { 
        description = '',
        amount = 0, 
        createdAt = 0 
        } = {}) => ({
    type: 'ADD_PAYMENT',
    payment: {
        id: uuid(),
        description,
        amount, 
        createdAt
    }
});

export const removePayment = ({ id } = {}) => ({
    type: 'REMOVE_PAYMENT',
    id
});

export const editPayment = (id, updates) => ({
    type: 'EDIT_PAYMENT',
    id,
    updates
});