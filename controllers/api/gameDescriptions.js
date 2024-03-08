const GameDescription = require('../../models/gameDescription')

module.exports = {
  show
};

async function show(req, res) {
  try{
    const description = await GameDescription.findById(req.params.id);
    res.status(200).json(description);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}