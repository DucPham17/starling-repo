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



router.get("/failed", (req, res) => {
    console.log("failed to sign in with google")
    res.redirect("http://localhost:3000");
})
router.get("/success", isLoggedIn, (req, res) => {
    //console.log(req.user);
    const email = req.user.profile.email;
    const displayName = req.user.profile.displayName;
    const password = '123456';
    //console.log(email);
    //console.log(displayName);
    //console.log(req.user.profile);
    const secret = 'secret';
    admin
        .auth()
        .getUserByEmail(req.user.profile.email)
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Email existed");
            const record = userRecord.toJSON();
            console.log(record);
            const jwt = sign(record, secret);
            console.log(jwt);
            res.redirect("http://localhost:3000?token=" + jwt);
            // console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
        })
        .catch((error) => {
            console.log(error+"runned into error");
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log("aaa");
                    // Signed in 
                    var user = userCredential.user;
                    user.updateProfile({
                        displayName: displayName,
                    }).then(function () {
                        const jwt = sign(user, secret);
                        res.redirect("http://localhost:3000?token=" + jwt);
                    }).catch(function (error) {
                        // An error happened.
                    });

                })
                .catch((error) => {
                    console.log(error);
                    res.redirect("http://localhost:3000");
                });

        });
})

router.get('/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/api/users/failed',
    }),
    function (req, res) {
        res.redirect('/api/users/success')

    }
);

router.get("/logoutGoogle", (req, res) => {
    console.log("logging out")
    req.session = null;
    req.logout();
    res.redirect('/api/users/signout')
})







module.exports = router;