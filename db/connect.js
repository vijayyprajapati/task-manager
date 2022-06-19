const mongoose = require("mongoose");

url =
  "mongodb+srv://vijayy:vijay001@task-manager.px53rbl.mongodb.net/task-manager?retryWrites=true&w=majority";
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
