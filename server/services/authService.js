import * as admin from 'firebase-admin';

admin.initializeApp(
  credential: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  //databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
);

export default admin