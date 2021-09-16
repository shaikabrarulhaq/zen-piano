const express = require('express');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/homeRoutes');
const guideRoutes = require('./routes/guideRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

const port = 80;

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

// home
app.use('/', homeRoutes);

// guide
app.use('/guide', guideRoutes);

// feedback
app.use('/feedback', feedbackRoutes);

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Error' });
})
