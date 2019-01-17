import database from '../firebase/firebase'

export const addDebt = (debt) => ({
    type: 'ADD_DEBT',
    debt
});

export const startAddDebt = (debtData = {}) => {
    return (dispatch) => {
        const {
            description = '',  
            amount = 0, 
            createdAt = 0 
        } = debtData;
        const debt = { description, amount, createdAt };

        database.ref('debts').push(debt).then((ref) => {
            dispatch(addDebt({
                id: ref.key,
                ...debt
            }));
        });
    };
};

export const removeDebt = ({ id } = {}) => ({
    type: 'REMOVE_DEBT',
    id
});

export const editDebt = (id, updates) => ({
    type: 'EDIT_DEBT',
    id,
    updates
});