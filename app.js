const express = require('express');
const mongoose = require('mongoose');
const Feedback = require('./models/feedback');
const nodemailer = require('nodemailer');

const app = express();

const port = 80;

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 's.abrar.ul.haq.official@gmail.com',
		pass: '#AlPha2001AbrarOfficial@<google>'
	}
});

const URI = "mongodb+srv://sabrarulhaq:sabrarulhaq2001@alphapianocluster.7536o.mongodb.net/alphaPianoData?retryWrites=true&w=majority";
mongoose.connect(URI)
    .then((result) => {
        app.listen(port, () => console.log(`Server running at http://127.0.0.1:${port}`));
        console.log("Connected to mongodb");
    })
    .catch((err) => console.log(err))

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/guide', (req, res) => {
    res.render('guide', { title: 'Guide' });
});

app.get('/feedback', (req, res) => {
    res.render('feedback', { title: 'Feedback' });
});

app.post('/feedback', (req, res) => {
    const feedback = new Feedback(req.body);
    feedback.save()
        .then((result) => {
            var mailOptions = {
                from: 's.abrar.ul.haq.official@gmail.com',
                to: 'sabrarulhaq2001@gmail.com',
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
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404 Error' });
})
