import config from '../../etc/no-share.json';

export default function () {
    // Find the appropriate database to connect to, default to localhost if not found.
    return {
        db: 'mongodb://localhost/redux2',
        sessionSecret: 'random-session-string',
        google: {
            clientID: config.googleClientID,
            clientSecret: config.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        facebook: {
            clientID: config.facebookClientID,
            clientSecret: config.facebookClientSecret,
            callbackURL: "/auth/facebook/callback"
        }
    }
}();