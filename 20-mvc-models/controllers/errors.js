module.exports.get404Page = (req, ress) => {
    ress.status(404).render('404', {title: 'Page Not Found'});
}