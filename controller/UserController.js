const { User, } = require('../model')
const { ErrorHandler, } = require('../util/error')

module.exports = {
  create: async (req, res, next) => {
    try {
      const { user, } = req.body

      if (!user.email) {
        throw new ErrorHandler(422, 'Missing required email field')
      }

      if (!user.password) {
        throw new ErrorHandler(422, 'Missing required password field')
      }

      const newUser = await new User(user)
      newUser.setPassword(user.password)
      newUser.save()
      //Send the response
      res.send({
        data: {
          user: newUser.toAuthJSON(),
        },
        status: {
          code: 200,
          message: 'Operation handle correctly',
          succeeded: true,
        },
      })
    } catch (err) {
      //Send the error
      next(err)
    }
  },
}