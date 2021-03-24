const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
dotenv.config()
const config = require("./firebase.js");
const firebase = require("firebase/app");
const admin = require('firebase-admin');
//console.log(config);
var serviceAccount = require("./key.json");
firebase.initializeApp(config);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}); 


app.use(bodyParser.json());

app.listen(5000, () => {
    console.log("server started at port 5000")
}) 