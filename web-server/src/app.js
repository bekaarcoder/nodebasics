const path = require("path");
const express = require("express");
const hbs = require("hbs");

/* console.log(__dirname);
console.log(path.join(__dirname, "../public")); */

const app = express();

// set up hbs template engine for express
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

// setup static directries to server
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Weather App - Help"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather App - About"
  });
});

app.get("/weather", (req, res) => {
  res.send("Weather page!");
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 Page",
    error: "Help article not found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Page",
    error: "Page not found"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000...");
});
