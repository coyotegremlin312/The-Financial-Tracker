import database from '../firebase/firebase'
import {startEditDebt} from './debts';
import {startEditAsset} from './assets'

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
        }).then(() => {
          var ref = database.ref("debts");
          ref.orderByChild("description").equalTo(incomingFundData.toAsset).on("child_added", function(snapshot) {
              let key = snapshot.key;
              let subtract = snapshot.val();
              let update = subtract.amount - incomingFundData.amount;
              return database.ref(`debts/${snapshot.key}`).update({amount: update}).then(() => {
                dispatch(startEditDebt(key, {amount: update}));
              });
          })
        }).then(() => {
          var ref = database.ref("assets");
          ref.orderByChild("description").equalTo(incomingFundData.toAsset).on("child_added", function(snapshot) {
              let key = snapshot.key;
              let subtract = snapshot.val();
              let update = subtract.amount + incomingFundData.amount;
              return database.ref(`assets/${snapshot.key}`).update({amount: update}).then(() => {
                dispatch(startEditAsset(key, {amount: update}));
              });
          })
        })
    };
};

export const removeIncomingFund = ({ id } = {}) => ({
    type: 'REMOVE_INCOMING_FUND',
    id
});

export const startRemoveIncomingFund = ({ id } = {}) => {
    return (dispatch) => {
      return database.ref(`incomingFunds/${id}`).remove().then(() => {
        dispatch(removeIncomingFund({ id }));
      });
    };
};

export const editIncomingFund = (id, updates) => ({
    type: 'EDIT_INCOMING_FUND',
    id,
    updates
});

export const startEditIncomingFund = (id, updates) => {
    return (dispatch) => {
      return database.ref(`incomingFunds/${id}`).update(updates).then(() => {
        dispatch(editIncomingFund(id, updates));
      });
    };
  };

export const setIncomingFunds = (incomingFunds) => ({
    type: 'SET_INCOMING_FUNDS',
    incomingFunds
  });

export const startSetIncomingFunds = () => {
    return (dispatch) => {
      return database.ref('incomingFunds').once('value').then((snapshot) => {
        const incomingFunds = [];
  
        snapshot.forEach((childSnapshot) => {
          incomingFunds.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setIncomingFunds(incomingFunds));
      });
    };
  };