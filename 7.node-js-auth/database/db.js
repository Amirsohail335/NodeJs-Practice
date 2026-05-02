const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connect Successfully!!!");
  } catch (error) {
    console.error("MonogDB connect Failed!!!");
    process.exit(1);
  }
};

module.exports = connectToDB;
