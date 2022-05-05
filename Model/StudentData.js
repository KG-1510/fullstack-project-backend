const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentData = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  // },
  year: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  spl: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('StudentDB', StudentData);
