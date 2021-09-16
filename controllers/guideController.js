const guide_get = (req, res) => {
    res.render('guide', { title: 'Guide' });
}

module.exports = {
    guide_get
}