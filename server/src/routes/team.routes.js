import express from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  createTeam,
  addMember,
  getUserTeams,
} from "../controllers/team.controller.js";

const router = express.Router();

router.use(verifyJWT);

router.post("/", createTeam);
router.get("/", getUserTeams);
router.post("/:teamId/add-member", addMember);

export default router;  