const mongoose = require("mongoose");

var workSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  place: {
    type: String,
  },
  starting: {
    type: String,
  },
});

mongoose.model("workModel", workSchema);
