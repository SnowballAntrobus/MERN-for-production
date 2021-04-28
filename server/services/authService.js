const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  //databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

module.exports = admin;