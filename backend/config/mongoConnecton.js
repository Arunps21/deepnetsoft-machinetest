const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/deepnetsoft")
  .then(() => console.log("Server connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });
  
module.exports = mongoose.connection