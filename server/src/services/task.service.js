import Task from "../models/task.model.js";
import Project from "../models/project.model.js";
import Team from "../models/team.model.js";
import ApiError from "../utils/ApiError.js";

// CREATE TASK
export const createTaskService = async (userId, projectId, data) => {
  const project = await Project.findById(projectId).populate("team");

  if (!project) throw new ApiError(404, "Project not found");

  const team = await Team.findById(project.team);

  const isMember = team.members.some(
    (m) => m.user.toString() === userId.toString()
  );

  if (!isMember) throw new ApiError(403, "Not allowed");

  const task = await Task.create({
    ...data,
    project: projectId,
    createdBy: userId,
  });

  return task;
};

// GET TASKS BY PROJECT
export const getTasksService = async (userId, projectId) => {
  const project = await Project.findById(projectId).populate("team");

  if (!project) throw new ApiError(404, "Project not found");

  const team = await Team.findById(project.team);

  const isMember = team.members.some(
    (m) => m.user.toString() === userId.toString()
  );

  if (!isMember) throw new ApiError(403, "Access denied");

  return Task.find({ project: projectId })
    .populate("assignedTo", "name email")
    .populate("createdBy", "name");
};

// UPDATE TASK STATUS
export const updateTaskStatusService = async (userId, taskId, status) => {
  const task = await Task.findById(taskId).populate({
    path: "project",
    populate: { path: "team" },
  });

  if (!task) throw new ApiError(404, "Task not found");

  const team = await Team.findById(task.project.team);

  const isMember = team.members.some(
    (m) => m.user.toString() === userId.toString()
  );

  if (!isMember) throw new ApiError(403, "Access denied");

  task.status = status;
  await task.save();

  return task;
};

// ADD COMMENT
export const addCommentService = async (userId, taskId, text) => {
  const task = await Task.findById(taskId);

  if (!task) throw new ApiError(404, "Task not found");

  task.comments.push({
    user: userId,
    text,
  });

  await task.save();

  return task;
};