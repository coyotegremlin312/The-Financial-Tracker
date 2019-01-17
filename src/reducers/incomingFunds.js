const incomingFundsReducerDefaultState = [];

export default (state = incomingFundsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_INCOMING_FUND':
            return [
                ...state,
                action.incomingFund
            ];
        case 'REMOVE_INCOMING_FUND':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_INCOMING_FUND':
            return state.map((incomingFund) => {
                if(incomingFund.id === action.id){
                    return{
                        ...incomingFund,
                        ...action.updates
                    }
                } else {
                    return incomingFund;
                }
            });
        case 'SET_INCOMING_FUNDS':
            return action.incomingFunds;
        default:
            return state;
    }
};