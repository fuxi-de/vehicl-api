const router = require("express").Router();
const { PageController, } = require("../../controller")
const { upload, } = require("../../util/uploads")

router.get("/pages", PageController.find)

router.post("/pages/create", PageController.create)

router.get("/pages/:id", PageController.findOne)

router.put("/pages/:id/update", PageController.update)

router.delete("/pages/:id/delete", PageController.destroy)

router.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error("Please upload a file")
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)

})

module.exports = router
