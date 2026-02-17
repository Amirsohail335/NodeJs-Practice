const mongoose = require("mongoose");
// connect to database
const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://amirsohail0212_db_user:Node335@cluster0.j0spbv6.mongodb.net/"
    );
    console.log("mongodb is connected successfully !");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
