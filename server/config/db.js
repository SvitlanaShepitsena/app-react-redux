'use strict'
import mongoose from 'mongoose';
import secrets from './secrets';

export default function () {
    mongoose.connect(secrets.db, function (err, res) {
        if (err) {
            console.log('Error connecting to: ' + secrets.db + '. ' + err);
        } else {
            console.log('Succeeded connected to: ' + secrets.db);
        }
    });
}
