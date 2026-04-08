import Project from "../models/project.model.js";
import Team from "../models/team.model.js";
import ApiError from "../utils/ApiError.js";

// CREATE PROJECT
export const createProjectService = async (userId, teamId, data) => {
  const team = await Team.findById(teamId);

  if (!team) throw new ApiError(404, "Team not found");

  // check if user is member
  const isMember = team.members.some(
    (m) => m.user.toString() === userId.toString()
  );

  if (!isMember) throw new ApiError(403, "Not a team member");

  const project = await Project.create({
    ...data,
    team: teamId,
    createdBy: userId,
  });

  return project;
};

// GET PROJECTS BY TEAM
export const getProjectsByTeamService = async (userId, teamId) => {
  const team = await Team.findById(teamId);

  if (!team) throw new ApiError(404, "Team not found");

  const isMember = team.members.some(
    (m) => m.user.toString() === userId.toString()
  );

  if (!isMember) throw new ApiError(403, "Access denied");

  return Project.find({ team: teamId });
};

// DELETE PROJECT
export const deleteProjectService = async (userId, projectId) => {
  const project = await Project.findById(projectId).populate("team");

  if (!project) throw new ApiError(404, "Project not found");

  const team = await Team.findById(project.team._id);

  const isAdmin = team.members.some(
    (m) =>
      m.user.toString() === userId.toString() &&
      m.role === "admin"
  );

  if (!isAdmin) throw new ApiError(403, "Only admin can delete");

  await project.deleteOne();

  return true;
};