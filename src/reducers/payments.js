const paymentsReducerDefaultState = [];

export default (state = paymentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PAYMENT':
            return [
                ...state,
                action.payment
            ];
        case 'REMOVE_PAYMENT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PAYMENT':
            return state.map((payment) => {
                if(payment.id === action.id){
                    return{
                        ...payment,
                        ...action.updates
                    }
                } else {
                    return payment;
                }
            });
        default:
            return state;
    }
};