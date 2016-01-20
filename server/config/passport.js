
var User = require('../models/user');
var local = require('./passport/local');
var google = require('./passport/google');
var facebook = require('./passport/facebook');


export default function(app, passport, config) {
  // serialize sessions
  passport.serializeUser(function(user, done) {
    console.log('serialize')
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    console.log('deserializeUser')
    done(null, user);


  });

  //use the following strategies
  passport.use(local);
  passport.use(google);
  passport.use(facebook);
};