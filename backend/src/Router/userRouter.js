const express = require("express");
const firebase = require("firebase/app");
require("firebase/auth");
const router = express.Router();
const admin = require('firebase-admin');

router.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
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

router.get("/signout", (req,res) => {
    firebase.auth().signOut();
    res.send("abc");
})




module.exports = router;