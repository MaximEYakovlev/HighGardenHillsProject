const router = require('express').Router();
const { Wine } = require('../db/models');

router.get('/', async (req, res) => {
  // const set = await Set.findAll({ limit: 5 });
  // const wineRec = await Wine.findAll({order:[[score]], limit: 5 });
  const wine = await Wine.findAll();
  res.render('./wine/index', { wine });
});

module.exports = router;
