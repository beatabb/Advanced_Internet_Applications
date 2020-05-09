var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/parrotsworlddb',  {useNewUrlParser: true, useUnifiedTopology: true } );

var products = [
    new Product({
    imagePath: 'https://vitapol.pl/media/k2/items/cache/068055ed933d2e69cfeb9ff2d23bac50_M.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot (900 g)',
    description: 'The rich variety of ingredients provides a mix full of different tastes and texture for an interesting meal every time. ',
    price: 10
    }),
    new Product({
    imagePath: 'https://www.maxandmrau.pl/pol_pm_Vitapol-karma-pelnoporcjowa-dla-papugi-falistej-1kg-1284_1.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot (900 g)',
    description: 'Add this scrumptious mix of exotic grains, legumes, fruits and vegetables to their daily feeding routine and help keep your bird in excellent health.',
    price: 10
    }),
    new Product({
    imagePath: 'https://image.ceneostatic.pl/data/products/78982604/i-vitapol-karmeo-premium-pokarm-dla-duzej-papugi-2-5kg.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot (500 g)',
    description: 'Each and every bag contains the finest quality human grade ingredients to ensure your bird receives optimum nutritional value in each and every beak full.',
    price: 7
    }),
    new Product({
    imagePath: 'https://www.crazyworldpets.pl/17304/vitapol-excellent-pokarm-dla-duzych-papug-500g.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot (500 g)',
    description: 'The wide array of ingredients which come in a variety of shapes and textures, provide your Parrot with a meal that is super tasty and fun to eat.',
    price: 7
    }),
    new Product({
    imagePath: 'https://pupilexpert.pl/img/products/45/06/2/1_max.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot (900 g)',
    description: 'It contains spirulina, a good bacteria that all humans and birds can enjoy. It’s one of the most nutrient rich foods in the world.',
    price: 10
    }),
    new Product({
    imagePath: 'https://zoodom.pl/33078-large_default/vitapol-pokarm-dla-papugi-falistej-25kg-2168-.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot (250 g)',
    description: 'Contains only healthy, nutritious ingredients for your Parrot to enjoy each mealtime.',
    price: 5
    }),
    new Product({
    imagePath: 'https://ezoo.pl/environment/cache/images/0_0_productGfx_030967715c0965e06a40f290c91894e3.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot (900 g)',
    description: 'Full of seeds, nuts and pods that Parrots love spending time on by using their skills to open and retrieve their tasty reward.',
    price: 12
    }),
    new Product({
    imagePath: 'https://images.morele.net/i1064/1147856_0_i1064.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot',
    description: 'Fruit are made especially for Cockatiels and most other large Australian Parakeets.',
    price: 4
    }),
    new Product({
    imagePath: 'https://www.maxandmrau.pl/pol_pl_Vitapol-Kolby-Smackers-dla-Nimfy-Owocowe-2szt-2206-10828_1.jpg',
    title: 'A low-fat, highly nutritious mix for your parrot',
    description: 'They come with a convenient hanger to attach them to the cage, providing fun for your bird by keeping their beak and mind active. ',
    price: 4
    })
    
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}