const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { Wine } = require('../db/models');
const authUser = require('../middleware/authUser');

router.route('/').get(async (req, res) => {
  const wine = await Wine.findAll();
  res.render('./wine/wine', { wine });
});
router.route('/:id').get(async (req, res) => {
  const wine = await Wine.findOne({ where: { id: req.params.id } });
  res.render('./wine/wineList', { wine });
});
// router.route('/set').get(async (req, res) => {
//   res.render('./wine/set');
// });
// router.route('/rec').get(async (req, res) => {
//   res.render('./wine/rec');
// });
module.exports = router;
