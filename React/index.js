import express from "express";

const app = express();

app.get("/data", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
