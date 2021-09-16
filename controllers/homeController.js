const home_get = (req, res) => {
    res.render('index', { title: 'Home' });
}

module.exports = {
    home_get
};