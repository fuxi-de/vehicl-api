const router = require("express").Router();
const { PageController, } = require("../../controller")
const { upload, } = require("../../util/uploads")

router.get("/all", PageController.find)

router.post("/create", PageController.create)

router.get("/:id", PageController.findOne)

router.put("/:id/update", PageController.update)

router.delete("/:id/delete", PageController.destroy)

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
