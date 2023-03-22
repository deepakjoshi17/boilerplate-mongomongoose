let mongoose = require('mongoose');

let personSchema = new mongoose.Schema(
    {
      id: Number,
      name: String,
      email: String
    }
  );

module.exports = mongoose.model('Person', personSchema);