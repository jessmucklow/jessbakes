require('dotenv').config();
require('./config/database');

const Good = require('./models/good');


// IIFE
(async function() {

  await Good.deleteMany({});
  const items = await Good.create([
    {name: 'Banana Bread', emoji: '🍌',  price: 12},
    {name: 'Zuccini Bread', emoji: '🥒',  price: 12},
    {name: 'Olive Oil Rosemary Bread', emoji: '🍞',  price: 16},
    {name: 'Burger buns', emoji: '🍔',  price: 10},
    {name: 'Mini Rosemary Fennel Pasty', emoji: '🥟',  price: 9},
    {name: 'Cakes', emoji: '🎂',  price: 30},
    {name: 'Cupcakes', emoji: '🧁',  price: 30},
    {name: 'Brownies', emoji: '🍫',  price: 12},
    {name: 'Pie', emoji: '🥧',  price: 20},
    {name: 'Cookies', emoji: '🍪',  price: 18},
    {name: 'Lemon Bars', emoji: '🍋',  price: 15},
    {name: 'Sugared Nuts', emoji: '🌰',  price: 12},
 
  ]);

  console.log(items)

  process.exit();

})();
