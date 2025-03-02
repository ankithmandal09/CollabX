// const mongoose = require("mongoose");
// require("dotenv").config();

// const DB_URL = process.env.DB_URL;

// const connection = mongoose.connect(DB_URL);

// module.exports = connection;


const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to Atlas cluster");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from Atlas cluster");
});

module.exports = mongoose;