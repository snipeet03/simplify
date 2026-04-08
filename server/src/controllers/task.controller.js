import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import {
  createTaskService,
  getTasksService,
  updateTaskStatusService,
  addCommentService,
} from "../services/task.service.js";

// CREATE TASK
export const createTask = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const task = await createTaskService(
    req.user._id,
    projectId,
    req.body
  );

  return res
    .status(201)
    .json(new ApiResponse(201, task, "Task created"));
});

// GET TASKS
export const getTasks = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const tasks = await getTasksService(
    req.user._id,
    projectId
  );

  return res
    .status(200)
    .json(new ApiResponse(200, tasks));
});

// UPDATE STATUS
export const updateTaskStatus = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;

  const task = await updateTaskStatusService(
    req.user._id,
    taskId,
    status
  );

  return res
    .status(200)
    .json(new ApiResponse(200, task, "Status updated"));
});

// ADD COMMENT
export const addComment = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const { text } = req.body;

  const task = await addCommentService(
    req.user._id,
    taskId,
    text
  );

  return res
    .status(200)
    .json(new ApiResponse(200, task, "Comment added"));
});