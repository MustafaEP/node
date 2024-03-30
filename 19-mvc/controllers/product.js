const products = [
    {name: 'Samsung S10', price: 3000, image: '1.jpeg', description: 'İyidir.'},
    {name: 'Samsung S11', price: 4000, image: '2.jpeg', description: 'Çok İyidir.'},
    {name: 'Samsung S12', price: 5000, image: '3.jpeg', description: 'Candır.'}
];

exports.getProducts = (req, res, next) => {

    res.render('index', {
        title: 'Homepage', 
        products: products,
        path: '/'
    });
}

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        title: 'Add a New Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    
    products.push( 
        {
            name: req.body.name, 
            price: req.body.price, 
            image:req.body.image, 
            description:req.body.description
        } );
    res.redirect('/');
    //Kullanıcıyı yönlendirme
}