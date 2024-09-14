import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Action: Hello World ${process.env.TEST_KEY} / !`);
});

app.get("/hello", (req, res) => {
  res.send("Action: Hello World /HELLO !");
});

// app.listen(3000, () => {
//   console.log('App is running on port 3000');
// });

export const handler = serverless(app);
