import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import {
  createProjectService,
  getProjectsByTeamService,
  deleteProjectService,
} from "../services/project.service.js";

// CREATE PROJECT
export const createProject = asyncHandler(async (req, res) => {
  const { teamId } = req.params;

  const project = await createProjectService(
    req.user._id,
    teamId,
    req.body
  );

  return res
    .status(201)
    .json(new ApiResponse(201, project, "Project created"));
});

// GET PROJECTS
export const getProjects = asyncHandler(async (req, res) => {
  const { teamId } = req.params;

  const projects = await getProjectsByTeamService(
    req.user._id,
    teamId
  );

  return res
    .status(200)
    .json(new ApiResponse(200, projects));
});

// DELETE PROJECT
export const deleteProject = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  await deleteProjectService(req.user._id, projectId);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Project deleted"));
});