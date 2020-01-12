const mongoose = require('mongoose')
const passport = require('passport')
const router = require('express').Router()
const auth = require('../../util/auth')
require('../../model/User')
require('../../util/passport-setup')
const Users = mongoose.model('User')
const { UserController, } = require('../../controller')

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, UserController.create);

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, UserController.login)

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id, }, } = req;

  return Users.findById(id)
    .then((user) => {
      if (!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON(), });
    });
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;