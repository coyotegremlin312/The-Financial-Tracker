import { createStore, combineReducers } from 'redux';
import assetReducer from '../reducers/assets';
import debtsReducer from '../reducers/debts';
import incomingFundsReducer from '../reducers/incomingfunds';
import paymentsReducer from '../reducers/payments';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filter';

export default () => {
  const store = createStore(
    combineReducers({
      assets: assetReducer,
      debts: debtsReducer,
      incomingFunds: incomingFundsReducer,
      payments: paymentsReducer,
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
