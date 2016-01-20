export default function () {
    // Find the appropriate database to connect to, default to localhost if not found.
    if (!process.env.GOOGLE_CLIENTID) {
        var config = require('../../etc/no-share.json');
    }
    return {
        db: 'mongodb://redux:FeCtut@ds039175.mongolab.com:39175/redux',
        sessionSecret: 'random-session-string',
        google: {
            clientID: process.env.GOOGLE_CLIENTID || config.googleClientID,
            clientSecret: process.env.GOOGLE_CLIENTSECRET || config.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        facebook: {
            clientID: process.env.FACEBOOK_CLIENTID || config.facebookClientID,
            clientSecret: process.env.FACEBOOK_CLIENTSECRET || config.facebookClientSecret,
            callbackURL: "/auth/facebook/callback"
        }
    }
}();