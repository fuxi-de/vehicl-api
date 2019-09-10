const { Page } = require("../model")

module.exports = {
  create: async (req, res, next) => {
    try {
      const page = req.body
      //Create new page
      const newPage = await new Page(page).save()
      console.log(newPage)
      //Send the response
      res.send({
        data: {
          page: newPage
        },
        status: {
          code: 200,
          message: "Page created correctly",
          succeeded: true
        }
      })
    } catch (err) {
      //Send the error
      next(err)
    }
  },
  find: async (req, res, next) => {
    try {
      const pages = await Page.getAll()

      //Send the response
      res.send({
        data: {
          pages: pages
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      })
    } catch (err) {
      //Send the error
      next(err)
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params

      //Find a page by Id
      const thePage = await Page.findById(id)

      //Send the response
      res.send({
        data: {
          page: thePage
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      })
    } catch (err) {
      //Send the error
      next(err)
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params
      const page = req.body

      console.log({...page})
      //Find a page by Id and update
      const thePage = await Page.findByIdAndUpdate(id, { ...page })
      console.log(thePage)
      //Send the response
      res.send({
        data: {
          page: thePage
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      })
    } catch (err) {
      //Send the error
      next(err)
    }
  },
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params
      const { page } = req.body

      //Find a page by id and remove it
      const thePage = await Page.findByIdAndRemove(id)

      //Send the response
      res.send({
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      })
    } catch (err) {
      //Send the error
      next(err)
    }
  }
}
