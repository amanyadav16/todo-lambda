import express from "express";

import {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controller/todo-controller.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
