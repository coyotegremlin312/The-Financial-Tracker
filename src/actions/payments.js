import database from '../firebase/firebase'

export const addPayment = (payment) => ({
    type: 'ADD_PAYMENT',
    payment
});

export const startAddPayment = (paymentData = {}) => {
    return (dispatch) => {
        const {
            description = '',  
            amount = 0, 
            createdAt = 0 
        } = paymentData;
        const payment = { description, amount, createdAt };

        database.ref('payments').push(payment).then((ref) => {
            dispatch(addPayment({
                id: ref.key,
                ...payment
            }));
        });
    };
};

export const removePayment = ({ id } = {}) => ({
    type: 'REMOVE_PAYMENT',
    id
});

export const editPayment = (id, updates) => ({
    type: 'EDIT_PAYMENT',
    id,
    updates
});

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