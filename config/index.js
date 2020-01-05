const dev = require("./dev");
const prod = require("./prod");

//logic config for development or production
if(process.env.NODE_ENV === "production"){
  module.exports = prod;
} else {
  module.exports = dev;
}