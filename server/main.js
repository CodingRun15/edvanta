const express = require("express");
const { userRouter } = require("./routes/userRoutes");
const app = express();
app.use(express.json());
const cors = require("cors");
const mongoose  = require("mongoose");
const port = 4000;
app.use(
  cors({
    origin: "*",
    methods: ["*"], // allow these methods to access the API
  })
);

app.get("/", (req, res) => {
  res.send("this is homepage.");
});

app.use("/user", userRouter);

app.listen(port, async() => {
  console.log(`Server is running on port ${port}`);
  await mongoose.connect('mongodb://127.0.0.1:27017/edvanta');
  console.log("Connected to MongoDB");
});
