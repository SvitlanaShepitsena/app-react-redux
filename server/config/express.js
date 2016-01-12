var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var secrets = require('./secrets');
var flash = require('express-flash');
var methodOverride = require('method-override');

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

export default function (app, passport) {

    app.disable('x-powered-by');
    app.set('views', path.join(__dirname, '..', 'views'));

    app.set('view cache', false);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
    app.use(methodOverride());
    app.use(express.static(path.join(__dirname, '../..', 'public')));

    app.enable('trust proxy');

    app.use(cookieParser());

    var sess = {
        resave: true,
        saveUninitialized: true,
        // Use generic cookie name for security purposes
        key: 'sessionId',
        secret: secrets.sessionSecret,
        // Add HTTPOnly, Secure attributes on Session Cookie
        // If secure is set, and you access your site over HTTP, the cookie will not be set
        cookie: {
            httpOnly: true,
            secure: false
        },
        store: new MongoStore({url: secrets.db, autoReconnect: true})
    };

    var node_env = process.env.NODE_ENV;
    console.log('Environment: ' + node_env);
    if (node_env === 'production') {
        sess.cookie.secure = true; // Serve secure cookies
    }

    app.use(session(sess));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(flash());

    // It is important to catch any errors from the proxy or the
    // server will crash. An example of this is connecting to the
    // server when webpack is bundling
    proxy.on('error', function (e) {
        console.log('Could not connect to proxy, please try again...');
    });

};
