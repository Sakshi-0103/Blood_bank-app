
/*const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
        //host batata ki local db he ya cloud db he
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB; */

const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URL); // Add this line for debugging
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(
      `Connected To MongoDB Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MongoDB Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
