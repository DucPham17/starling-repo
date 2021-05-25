const express = require("express");
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
dotenv.config()
const passport = require('passport');
const cookieSession = require('cookie-session');
const firebase = require("firebase/app");
const config = require("./src/firebase.js");
const admin = require('firebase-admin');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
firebase.default.initializeApp(config);
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.googleKey)),
  storageBucket: process.env.storageBucket,
  serviceAccountId: process.env.serviceAccountId
});
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});


passport.use(new GoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL,
//  passReqToCallback: true
},
  function (request, accessToken, refreshToken, profile, done) {
      //console.log(request);
      //console.log(accessToken);
      const user = {
        id_token: refreshToken.id_token,
        profile : profile
      }
      //console.log(refreshToken);
      return done(null, user);
  }
));

app.use(cors())
const userRouter = require('./src/Router/userRouter')
const expenseRouter = require('./src/Router/expenseRouter')
const taskRouter = require('./src/Router/taskRouter')
const weatherRouter = require('./src/Router/weatherRouter')


app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", userRouter);
app.use("/api/expenses", expenseRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/weather", weatherRouter);

var port_number = process.env.PORT || 3000;

app.listen(port_number, () => {
  console.log("server started at port " + port_number);
})