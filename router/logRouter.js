const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const authUser = require('../middleware/authUser');

router
  .route('/registration')
  .get(authUser, async (req, res) => {
    res.render('./wine/registration');
  })
  // eslint-disable-next-line consistent-return
  .post(authUser, async (req, res) => {
    const { firstname, email, password, dateOfBirthday } = req.body;

    if (firstname && email && password && dateOfBirthday) {
      const hashPass = await bcrypt.hash(password, 10);
      try {
        const newUser = await User.create({
          firstName: firstname,
          email,
          dateOfBirth: dateOfBirthday,
          password: hashPass,
        });
        req.session.user = {
          id: newUser.id,
          name: newUser.firstName,
        };
        res.sendStatus(200).end();
      } catch (error) {
        return res.sendStatus(401).end();
      }
    } else {
      return res.sendStatus(401).end();
    }
  });
router
  .route('/login')
  .get(authUser, async (req, res) => {
    res.render('./wine/login');
  })
  .post(authUser, async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const currentUser = await User.findOne({ where: { email } });
        if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
          req.session.user = {
            id: currentUser.id,
            name: currentUser.firstName,
          };
          return res.sendStatus(200).end();
        }
        res.sendStatus(401).end();
      } catch (err) {
        return res.sendStatus(401).end();
      }
    } else {
      return res.sendStatus(401).end();
    }
  });

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sesid').redirect('/');
});

module.exports = router;
