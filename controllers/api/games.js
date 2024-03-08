const Game = require('../../models/game')

module.exports = {
  indexByGenre,
  show
};

async function indexByGenre(req, res) {
  try{
    const games = await Game.find({ genre: req.params.genreId }).sort('name').populate('genre').exec();
    games.sort((a, b) => a.genre.sortOrder - b.genre.sortOrder);
    res.status(200).json(games);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const game = await Game.findById(req.params.id);
    res.status(200).json(game);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}