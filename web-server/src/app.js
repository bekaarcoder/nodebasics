const path = require("path");
const express = require("express");

/* console.log(__dirname);
console.log(path.join(__dirname, "../public")); */

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

app.get("/help", (req, res) => {
  res.send("Help page!");
});

app.get("/about", (req, res) => {
  res.send("About page!");
});

app.get("/weather", (req, res) => {
  res.send("Weather page!");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000...");
});
