const Feedback = require('../models/feedback');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
        user: 's.abrar.ul.haq.official@gmail.com',
		pass: 'sauh<business>'
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
                from: 's.abrar.ul.haq.official@gmail.com',
                to: 'sauh.zen.piano.official@gmail.com',
                subject: 'Feedback: Alpha Piano',
                text: req.body.message + "\n\nFrom,\n" + req.body.email
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