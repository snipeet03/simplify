import Team from "../models/team.model.js";
import ApiError from "../utils/ApiError.js";

// CREATE TEAM
export const createTeamService = async (userId, name) => {
  const team = await Team.create({
    name,
    owner: userId,
    members: [
      {
        user: userId,
        role: "admin",
      },
    ],
  });

  return team;
};

// ADD MEMBER
export const addMemberService = async (teamId, userId, newUserId) => {
  const team = await Team.findById(teamId);

  if (!team) throw new ApiError(404, "Team not found");

  // check admin
  const isAdmin = team.members.some(
    (m) => m.user.toString() === userId && m.role === "admin"
  );

  if (!isAdmin) throw new ApiError(403, "Only admin can add members");

  team.members.push({
    user: newUserId,
    role: "member",
  });

  await team.save();

  return team;
};

// GET USER TEAMS
export const getUserTeamsService = async (userId) => {
  return Team.find({
    "members.user": userId,
  }).populate("members.user", "name email");
};