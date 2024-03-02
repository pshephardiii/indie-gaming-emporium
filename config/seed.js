require('dotenv').config();
require('./database');

const Genre = require('../models/genre');
const Game = require('../models/game');

(async function() {

  await Genre.deleteMany({});
  const genres = await Genre.create([
    {name: 'Adventure', sortOrder: 10},
    {name: 'Action', sortOrder: 20},
    {name: 'RPG', sortOrder: 30},
    {name: 'Horror', sortOrder: 40},
    {name: 'Casual', sortOrder: 50}
  ]);

  await Game.deleteMany({});
  const games = await Game.create([
    {name: 'Forgotten Worlds', image: '', description: '', genre: genres[0], price: 19.99},
    {name: `Roscoe's Journey`, image: '', description: '', genre: genres[0], price: 9.99},
    {name: 'Summit', image: '', description: '', genre: genres[0], price: 19.99},
    {name: 'Katana Sunset', image: '', description: '', genre: genres[1], price: 34.99},
    {name: 'Ex Nihilo: Phantom Glitch', image: '', description: '', genre: genres[1], price: 29.99},
    {name: 'Rusted Gauge', image: '', description: '', genre: genres[1], price: 24.99},
    {name: 'Homeward', image: '', description: '', genre: genres[2], price: 19.99},
    {name: 'Oblivion Rainbow', image: '', description: '', genre: genres[2], price: 29.99},
    {name: 'Sacrilege', image: '', description: '', genre: genres[2], price: 39.99},
    {name: `Devil's Playground`, image: '', description: '', genre: genres[3], price: 29.99},
    {name: 'Quiet Plateau: Sins of the Father', image: '', description: '', genre: genres[3], price: 19.99},
    {name: 'Traumatica', image: '', description: '', genre: genres[3], price: 14.99},
    {name: 'Ball Boy Mania!', image: '', description: '', genre: genres[4], price: 4.99},
    {name: 'Tax Audit Simulator', image: '', description: '', genre: genres[4], price: 14.99},
    {name: 'Bubble Buddy', image: '', description: '', genre: genres[4], price: 9.99},

  ]);

  console.log(games)

  process.exit();

})();

