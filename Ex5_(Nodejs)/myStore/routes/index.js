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
  var cart = new Cart(req.session.cart ? req.session.cart : {} );

  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  })
});

router.get('/shopping-cart', function(req, res, next){
  if (!req.session.cart){
    return res.render('shop/shopping-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {title: 'Parrots world', products: cart.generateArray(), totalPrice: cart.totalPrice});
  }
)

router.get('/checkout', function(req, res, next) {
	if(!req.session.cart) {
		res.redirect('/');
	}
	
	var cart = new Cart(req.session.cart);
	cart.clearCart();
	req.session.cart = cart;
	res.redirect('/');
});


router.get('/reduce-by-one/:id', function(req, res, next) {
	if(!req.session.cart) {
		res.redirect('/shopping-cart');
	}
	
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	   
	cart.reduceByOne(productId);
	req.session.cart = cart;
  res.redirect('/shopping-cart');
  
});


router.get('/remove-all/:id', function(req, res, next) {
	if(!req.session.cart) {
		res.redirect('/shopping-cart');
	}
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	   
		
	cart.removeAll(productId);
	req.session.cart = cart;
	res.redirect('/shopping-cart');
});



module.exports = router;
