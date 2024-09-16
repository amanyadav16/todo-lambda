import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes/todo-route.js";
import customErrorHandler from "./middleware/error-handler.js";
import { authHandler } from "./middleware/auth.js";

dotenv.config();
const app = express();

//essential middlewares
app.use(express.json());
app.use(morgan("dev"));

//initial middleware, execute before every api call
app.use((req, res, next) => {
  console.log("do something when request arrives...");
  req.isAdmin = true; // this can be accessed by other middleware
  next();
});

//final middleware, execute after every api call
app.use((req, res, next) => {
  next();
  console.log("do some clenup task...isAdmin:" + req.isAdmin);
});

//routes
app.use("/todo", authHandler, router);

//error handling middleware
app.use(customErrorHandler);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

//export const handler = serverless(app);
