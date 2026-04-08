import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import {
  createTeamService,
  addMemberService,
  getUserTeamsService,
} from "../services/team.service.js";

// CREATE TEAM
export const createTeam = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const team = await createTeamService(req.user._id, name);

  return res
    .status(201)
    .json(new ApiResponse(201, team, "Team created"));
});

// ADD MEMBER
export const addMember = asyncHandler(async (req, res) => {
  const { teamId } = req.params;
  const { userId } = req.body;

  const team = await addMemberService(
    teamId,
    req.user._id,
    userId
  );

  return res
    .status(200)
    .json(new ApiResponse(200, team, "Member added"));
});

// GET USER TEAMS
export const getUserTeams = asyncHandler(async (req, res) => {
  const teams = await getUserTeamsService(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, teams));
});