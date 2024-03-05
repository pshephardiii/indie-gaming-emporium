const Genre = require('../../models/genre');

module.exports = {
  getGenre,
  indexGenres,
  getGenreByName
};

async function indexGenres(req, res) {
  try{
    const genres = await Genre.find({});
    res.status(200).json(genres);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function getGenre(req, res) {
  try{
    const genre = await Genre.findById(req.params.genreId);
    res.status(200).json(genre);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

async function getGenreByName(req, res) {
    try {
        const genre = await Genre.findOne({ name: req.params.name })
        res.status(200).json(genre)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}