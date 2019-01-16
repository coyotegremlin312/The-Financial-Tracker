import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };









// database.ref('expense').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expense').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// child_added

// database.ref('expense')
//   .once('value')
//   .then((ashley) => {
//     const expenses = [];
//     ashley.forEach((childAshley) => {
//       expenses.push({
//         id: childAshley.key,
//         ...childAshley.val()
//       })
//     })
//     console.log(expenses);
//   });

//   database.ref('expense')
//   .on('value', (ashley) => {
//     const expenses = [];
//     ashley.forEach((childAshley) => {
//       expenses.push({
//         id: childAshley.key,
//         ...childAshley.val()
//       })
//     })
//     console.log(expenses);
//   });

// database.ref('expense').push({
//   description: 'Balloons',
//   note: "",
//   amount: 30,
//   createdAt: "January 15, 2019"
// });



// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const boom = snapshot.val();
//     console.log(boom);
//   })
//   .catch((e) => {
//     console.log("Error", e);
//   })

// database.ref().on('value', (snapshot) => {
//   const boom = snapshot.val();
//   console.log(boom.name + ' works at ' + boom.job.company + " in " + boom.job.location);
// })

// database.ref().on('value', (snapshot) => {
//   const boom = snapshot.val();
//   console.log(boom);
// })

// database.ref().set({
//   name: 'Ashley Brown',
//   age: 26,
//   isSingle: false,
//   stressLevel: 6,
//   job: {
//     company: 'Bonn',
//     location: 'Seattle'
//   },
//   location: {
//     city: 'Los Angeles',
//     country: 'United States'
//   }
// }).then(() => {
//   database.ref('attributes/height').set('64 Inches');
// }).then(() => {
//   database.ref('attributes/weight').set('132 lbs');
// }).then(() => {
//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Los Angeles'
//   })
// }).catch((e) => {
//   console.log('This failed', e);
// });



