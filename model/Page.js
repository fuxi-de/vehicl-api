const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PageSchema = new Schema(
  {
    headline: { type: String, required: true },
    body: { type: Array, required: true }
  },
  {
    timestamps: true
  }
)

const Page = mongoose.model("Page", PageSchema)
Page.getAll = () => {
  return Page.find({})
}

Page.addPage = pageToAdd => {
  return pageToAdd.save()
}

Page.removePage = PageName => {
  return Page.remove({ name: PageName })
}

module.exports = Page
