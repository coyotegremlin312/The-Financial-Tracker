import database from '../firebase/firebase'
import {startEditDebt} from './debts';
import {startEditAsset} from './assets'

export const addPayment = (payment) => ({
    type: 'ADD_PAYMENT',
    payment
});

export const startAddPayment = (paymentData = {}) => {
    return (dispatch) => {
        const {
            description = '',  
            amount = 0,
            fromAsset = '',
            createdAt = 0 
        } = paymentData;
        const payment = { description, amount, fromAsset, createdAt };

        database.ref('payments').push(payment).then((ref) => {
            dispatch(addPayment({
                id: ref.key,
                ...payment
            }));
        }).then(() => {
          var ref = database.ref("debts");
          ref.orderByChild("description").equalTo(paymentData.description).on("child_added", function(snapshot) {
              let key = snapshot.key;
              let subtract = snapshot.val();
              let update = subtract.amount - paymentData.amount;
              return database.ref(`debts/${snapshot.key}`).update({amount: update}).then(() => {
                dispatch(startEditDebt(key, {amount: update}));
              });
          })
        }).then(() => {
          var ref = database.ref("assets");
          ref.orderByChild("description").equalTo(paymentData.fromAsset).on("child_added", function(snapshot) {
              let key = snapshot.key;
              let subtract = snapshot.val();
              let update = subtract.amount - paymentData.amount;
              return database.ref(`assets/${snapshot.key}`).update({amount: update}).then(() => {
                dispatch(startEditAsset(key, {amount: update}));
              });
          })
        })
    };
};

export const removePayment = ({ id } = {}) => ({
    type: 'REMOVE_PAYMENT',
    id
});

export const startRemovePayment = ({ id } = {}) => {
    return (dispatch) => {
      return database.ref(`payments/${id}`).remove().then(() => {
        dispatch(removePayment({ id }));
      });
    };
};

export const editPayment = (id, updates) => ({
    type: 'EDIT_PAYMENT',
    id,
    updates
});

export const startEditPayment = (id, updates) => {
    return (dispatch) => {
      return database.ref(`payments/${id}`).update(updates).then(() => {
        dispatch(editPayment(id, updates));
      });
    };
  };

export const setPayments = (payments) => ({
    type: 'SET_PAYMENTS',
    payments
  });

export const startSetPayments = () => {
    return (dispatch) => {
      return database.ref('payments').once('value').then((snapshot) => {
        const payments = [];
  
        snapshot.forEach((childSnapshot) => {
          payments.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setPayments(payments));
      });
    };
  };