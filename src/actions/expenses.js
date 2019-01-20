import database from '../firebase/firebase'
import {startEditDebt} from './debts';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            amount = 0,
            fromAccount = '', 
            createdAt = 0 
        } = expenseData;
        const expense = { description, amount, fromAccount, createdAt };

        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).then(() => {
          var ref = database.ref("debts");
          ref.orderByChild("description").equalTo(expenseData.fromAccount).on("child_added", function(snapshot) {
              let key = snapshot.key;
              let subtract = snapshot.val();
              let update = subtract.amount + expenseData.amount;
              return database.ref(`debts/${snapshot.key}`).update({amount: update}).then(() => {
                dispatch(startEditDebt(key, {amount: update}));
              });
          })
        })
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
      return database.ref(`expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({ id }));
      });
    };
};

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
      return database.ref(`expenses/${id}`).update(updates).then(() => {
        dispatch(editExpense(id, updates));
      })
    };
  };

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

export const startSetExpenses = () => {
    return (dispatch) => {
      return database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];
  
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setExpenses(expenses));
      });
    };
  };
  