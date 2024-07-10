const mongoose = require("mongoose");

function Database() {
  mongoose
    .connect("mongodb://localhost:27017/Student")
    .then(() => {
      console.log(`Database connected.`);
    })
    .catch(() => {
      console.log("Database connection failed. Please check the port number.");
    });
}

Database();
