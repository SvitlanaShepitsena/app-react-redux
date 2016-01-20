
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

  passport.deserializeUser(function(id, done) {
    console.log('deserializeUser')

    User.findById(id, function(err, user) {
      console.log(user);
      done(err, user);
    });
  });

  //use the following strategies
  passport.use(local);
  passport.use(google);
  passport.use(facebook);
};