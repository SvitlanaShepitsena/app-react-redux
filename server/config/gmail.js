import nodemailer from 'nodemailer';

export default  function (app) {
    // user routes
    app.post('/gmail', (req, res)=> {
        var name = req.body.username;
        var from = "reduxwepapp@gmail.com";
        var message = req.body.message;
        var to = req.body.email;
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                user: "reduxwepapp@gmail.com",
                pass: "Kyiv2005#"
            }
        });
        var mailOptions = {
            from: from,
            to: to,
            subject: ' | new message from Chicago Web App !',
            text: message
        }
        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });

    });

};
