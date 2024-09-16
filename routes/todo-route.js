import express from "express";
import { idValidator } from "../middleware/id-validator.js";
import {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controller/todo-controller.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", idValidator, updateTodo);
router.delete("/:id", idValidator, deleteTodo);

export default router;
