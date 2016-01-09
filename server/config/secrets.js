import config from '../../etc/no-share.json';

export default function () {
    // Find the appropriate database to connect to, default to localhost if not found.
    return {
        db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/redux',
        sessionSecret: process.env.SESSION_SECRET || 'kasper-oh..vshiy-porosenok',
        google: {
            clientID: process.env.GOOGLE_CLIENTID || config.googleClientID,
            clientSecret: process.env.GOOGLE_SECRET || config.googleClientSecret,
            callbackURL: process.env.GOOGLE_CALLBACK || "/auth/google/callback"
        }
    }
}();
