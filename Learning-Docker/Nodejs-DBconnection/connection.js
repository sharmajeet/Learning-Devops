const mongo = require("mongoose");

mongo
  .connect(process.env.MONGO_URI || "mongodb://mongo:27017/Api-Testing-Docker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

module.exports = mongo;
