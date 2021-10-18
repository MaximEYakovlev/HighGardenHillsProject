async function checkAthor(req, res, next) {
  const { userid } = await Entry.findOne({ where: { id: req.params.id } });
  if (req.session.user.id === userid) {
    next();
  }
  return res.redirect('/');
}

module.exports = checkAthor;
