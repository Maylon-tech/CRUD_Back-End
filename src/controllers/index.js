
function index(req, res) {
    res.render('index', {
        //pageTitle:'Home - Page',
        title: 'Página Principal'
    })
}

module.exports = {
    index,
}