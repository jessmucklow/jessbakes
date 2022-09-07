const Good = require('../../models/good');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const goods = await Good.find({}).sort('name').exec();
  res.json(goods);
}

async function show(req, res) {
  const good = await Good.findById(req.params.id);
  res.json(good);
}
