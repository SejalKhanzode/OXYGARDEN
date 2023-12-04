const express = require("express");
const cors = require("cors")
const app = express();
const plants = require("./routes/plants")
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;
const {readdirSync} = require("fs");


// app.get("/", (req, res) => {
//   res.send("Main page!");
// });

app.get("/", plants);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});