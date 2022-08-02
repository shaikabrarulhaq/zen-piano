const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const homeRoutes = require('./routes/homeRoutes');
const guideRoutes = require('./routes/guideRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

require('dotenv').config();

connectDB();

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, console.log(`Server running on port ${port}`));

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
