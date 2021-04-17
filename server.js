const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
dotenv.config()
const config = require("./src/Backend/firebase.js");
const firebase = require("firebase/app");
const admin = require('firebase-admin'); 
firebase.initializeApp(config);
const serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.storageBucket
});
console.log(Date.now());
const userRouter = require('./src/Backend/Router/userRouter')
const expenseRouter = require('./src/Backend/Router/expenseRouter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users",userRouter);
app.use("/api/expenses",expenseRouter);
app.listen(5000, () => {
    console.log("server started at port 5000")
})