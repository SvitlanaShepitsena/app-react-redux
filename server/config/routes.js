var users = require('../controllers/users');
var mongoose = require('mongoose');
var _ = require('lodash');

export default  function (app, passport) {
    // user routes
    var p = process.env.NODE_ENV === "production" ? '' : '3001';

    app.post('/login', users.postLogin);
    app.get('/logout', users.getLogout);
    app.post('/signup', users.postSignUp);

    app.get('/auth/google/callback',
        passport.authenticate('google', {failureRedirect: '/'}),
        function (req, res) {
            // Successful authentication, redirect home.
            var fullUrl = req.protocol + '://' + req.get('host');
            console.log(fullUrl);
            res.redirect(fullUrl + '/tutorials');
        });
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {failureRedirect: '/'}),
        function (req, res) {
            // Successful authentication, redirect home.

            var fullUrl = req.protocol + '://' + req.get('host');
            res.redirect(fullUrl + '/tutorials');
            res.redirect('/tutorials');
        });

    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }));
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: [
            'public_profile',
            'email'
        ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.

};
;