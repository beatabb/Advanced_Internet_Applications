var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunks = [];
    chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Parrots world', products: productChunks });
    if (err) {
			res.redirect('/');
			alert('This product is not available')
		}
  });
  
});

router.get('/add-this-item/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}} );

  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  })
})

module.exports = router;
