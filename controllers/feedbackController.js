const Feedback = require('../models/feedback');
const nodemailer = require('nodemailer');

require('dotenv').config();

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
        user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD
	}
});

const feedback_get = (req, res) => {
    res.render('feedback', { title: 'Feedback' });
}

const feedback_post = (req, res) => {
    const feedback = new Feedback(req.body);
    feedback.save()
        .then((result) => {
            var mailOptions = {
                to: process.env.TO_MAIL_USERNAME,
                subject: 'Feedback: Zen Piano',
                text: req.body.message + "\n\nFrom,\n" + req.body.name + "\n" + req.body.email
            };
            transporter.sendMail(mailOptions, function(err, info){
                if (err) console.log(err);
                else console.log('Feedback sent: ' + info.response);
            });
            res.redirect('/');
        })
        .catch((err) => console.log(err))
}

module.exports = {
    feedback_get,
    feedback_post
}