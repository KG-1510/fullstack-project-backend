const mongoose = require('mongoose');

const connectDB = async () => {
  let mongoURI;

  mongoURI = process.env.MONGO_URI;

  try {
    const con = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      // useFindAndModify: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log(`✅ Connected to MongoDB`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
