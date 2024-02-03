import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());


const data = [];



app.post("/events", (req, res) => {
  try {
    const newDate = req.body;
    data.push(newDate);
    res.send(newDate);
  } catch {
    res.status(500).send("Something went wrong!!");
  }
});

app.get("/events", (req, res) => {
  res.send(data);
});


app.listen(5000);


