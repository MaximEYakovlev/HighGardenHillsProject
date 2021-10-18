const router = require('express').Router();
const { Wine } = require('../db/models');

router.post('/', async (req, res) => {
  const wine = await Wine.findOne({ where: { name: req.body.name } });
  if (wine) {
    res.json(wine);
  } else {
    return res.sendStatus(401).end();
  }
});

module.exports = router;
