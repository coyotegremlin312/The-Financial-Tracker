const debtReducerDefaultState = [];

export default (state = debtReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_DEBT':
            return [
                ...state,
                action.debt
            ];
        case 'REMOVE_DEBT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_DEBT':
            return state.map((debt) => {
                if(debt.id === action.id){
                    return{
                        ...debt,
                        ...action.updates
                    }
                } else {
                    return debt;
                }
            });
        default:
            return state;
    }
};