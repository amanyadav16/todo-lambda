import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes/todo-route.js";
import errorHandler from "./middleware/error-handler.js";

dotenv.config();
const app = express();

//essential middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/todo", router);

//error handling middleware
app.use(errorHandler);

// app.listen(3000, () => {
//   console.log("App is running on port 3000");
// });

export const handler = serverless(app);
