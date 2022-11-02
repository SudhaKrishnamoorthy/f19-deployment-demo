const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

//app.get("/", function(req, res) {
  //  res.sendFile(path.join(__dirname, "/../public/index.html"));
//});

app.use(express.static(path.join(__dirname, '../public')))

const port = process.send.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`)
});