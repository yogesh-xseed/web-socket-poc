const express = require("express");
const app = express();
var admin = require("firebase-admin");
var cors = require('cors')

app.use(cors())
var serviceAccount = require("./config/service-account-cred.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://practice-session-poc.firebaseio.com"
});
const db = admin.firestore();

app.listen(3001)

app.post('/postdata', async (req, res) => {
  let state = { 1: 1, 2: 1, 3: 1, 4: 1};
  let response = await db.collection('practice-session').add(state);
  res.send(response.id);
});


