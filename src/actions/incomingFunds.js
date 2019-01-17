import database from '../firebase/firebase'

export const addIncomingFund = (incomingFund) => ({
    type: 'ADD_INCOMING_FUND',
    incomingFund
});

export const startAddIncomingFund = (incomingFundData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            amount = 0,
            toAsset = '', 
            createdAt = 0 
        } = incomingFundData;
        const incomingFund = { description, amount, toAsset, createdAt };

        database.ref('incomingFunds').push(incomingFund).then((ref) => {
            dispatch(addIncomingFund({
                id: ref.key,
                ...incomingFund
            }));
        });
    };
};

export const removeIncomingFund = ({ id } = {}) => ({
    type: 'REMOVE_INCOMING_FUND',
    id
});

export const editIncomingFund = (id, updates) => ({
    type: 'EDIT_INCOMING_FUND',
    id,
    updates
});