var users = require('../controllers/users');
var mongoose = require('mongoose');
var _ = require('lodash');

export default  function (app, passport) {
    // user routes
    app.post('/login', users.postLogin);
    app.post('/signup', users.postSignUp);
    app.get('/logout', users.getLogout);

    app.get('/auth/google/callback',
        passport.authenticate('google', {failureRedirect: '/login'}),
        function (req, res) {
            // Successful authentication, redirect home.
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

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.

};
;
