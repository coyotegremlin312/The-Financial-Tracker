import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import assetReducer from '../reducers/assets';
import debtsReducer from '../reducers/debts';
import incomingFundsReducer from '../reducers/incomingFunds';
import paymentsReducer from '../reducers/payments';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filter';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
