const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

const port = 3000;

app.get("/", (req, res) => {
  res.render("home", { title: "Home", stylesheet: "home.css" });
});
app.get("/work-history", (req, res) => {
  res.render("work-history", {
    title: "Work History",
    stylesheet: "work-history.css",
  });
});
app.get("/testimonials", (req, res) => {
  res.render("testimonials", {
    title: "Testimonials",
    stylesheet: "testimonials.css",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", stylesheet: "contact.css" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(port, () => {
  `server listening on port ${port}`;
});
