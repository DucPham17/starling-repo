const express = require("express");
const firebase = require("firebase/app");
require("firebase/auth");
const router = express.Router();
const admin = require('firebase-admin');
const passport = require("passport");
const sign = require('jwt-encode');

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.error("There was some error");
    }
}

router.get("/test", (req,res) =>{
    res.send("abc");
})

router.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            res.send(user);

            // ...
        })
        .catch((error) => {
            console.log(error);
            res.status(401).send("Invalid email or password");
        });
})

router.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    console.log(req.body);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("aaa");
            // Signed in 
            var user = userCredential.user;
            user.updateProfile({
                displayName: name,
            }).then(function () {
                res.send(user);
            }).catch(function (error) {
                // An error happened.
            });

        })
        .catch((error) => {
            console.log(error);
            res.status(401).send("Existed email");
        });

})

router.get("/signout", (req, res) => {
    console.log("logging out")
    req.session = null;
    req.logout();
    firebase.auth().signOut();
    res.send("abc");
})

router.post('/google-signin', async (req, res) => {
    const {idToken} = req.body;
    console.log(idToken);
    const credentials = await firebase.auth.GoogleAuthProvider.credential(idToken);
 
    try {
        const userCredential = await firebase.auth().signInWithCredential(credentials);
        
        res.send(userCredential.user);
    } catch (e) {
        console.log(e);
        res.status(401).send("Unauthorized");
    };
});

router.post('/facebook-signin', async (req, res) => {
    const {accessToken} = req.body;
    
    const credentials = await firebase.auth.FacebookAuthProvider.credential(accessToken);
 
    try {
        const userCredential = await firebase.auth().signInWithCredential(credentials);
        
        res.send(userCredential.user);
    } catch (e) {
        console.log(e);
        res.status(401).send("Unauthorized");
    };
});

module.exports = router;