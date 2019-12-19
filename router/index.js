const { PostController, PageController, } = require("../controller")
const multer = require("multer")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now())
  },
})

const upload = multer({ storage: storage, })

module.exports = app => {
  // Create a Post
  app.post("/posts/create", PostController.create)
  // Find many Post
  app.get("/posts", PostController.find)
  // Find a Post
  app.get("/posts/:id", PostController.findOne)
  // Update a Post by Id
  app.put("/posts/:id/update", PostController.update)
  // Delete a post by Id
  app.delete("/posts/:id/delete", PostController.destroy)

  app.get("/pages", PageController.find)

  app.post("/pages/create", PageController.create)

  app.get("/pages/:id", PageController.findOne)

  app.put("/pages/:id/update", PageController.update)

  app.delete("/pages/:id/delete", PageController.destroy)

  app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error("Please upload a file")
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)

  })
}
