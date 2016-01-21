import nodemailer from 'nodemailer';

export default  function (app) {
    // user routes
    app.post('/gmail', (req, res)=> {
        var transporter = nodemailer.createTransport('smtps://reduxwebapp%40gmail.com:Kyiv2005#@smtp.gmail.com');

// setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'Fred Foo 👥 <reduxwebapp@gmail.com>', // sender address
            to: 'chicagobusinessintelligence1@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world 🐴', // plaintext body
            html: '<b>Hello world 🐴</b>' // html body
        };

// send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

        console.log(req.body);
    });

};
