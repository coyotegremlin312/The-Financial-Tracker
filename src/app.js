import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { startSetAssets } from './actions/assets';
import { startSetDebts } from './actions/debts';
import { startSetIncomingFunds } from './actions/incomingFunds';
import { startSetPayments } from './actions/payments';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  store.dispatch(startSetAssets())}).then(() => {
    store.dispatch(startSetDebts())}).then(() => {
      store.dispatch(startSetIncomingFunds())}).then(() => {
        store.dispatch(startSetPayments())}).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
