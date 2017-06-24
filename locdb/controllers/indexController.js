var Product = require('../models/product')

module.exports = {
    getindex: function (req, res, next) {
        Product.find(function (err, docs) {
            var productChunks = [];
            var chunkSize = 3;
            for ( var i = 0; i < docs.length; i+= chunkSize){
                productChunks.push(docs.slice(i,i + chunkSize));
            }
            res.render('shop/index', { title: 'Shopping Cart', products: docs });
        });
    }

}