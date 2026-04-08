import express from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  createTask,
  getTasks,
  updateTaskStatus,
  addComment,
} from "../controllers/task.controller.js";

const router = express.Router();

router.use(verifyJWT);

// create task
router.post("/:projectId", createTask);

// get tasks
router.get("/:projectId", getTasks);

// update status
router.patch("/:taskId/status", updateTaskStatus);

// add comment
router.post("/:taskId/comment", addComment);

export default router;