import express from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  createProject,
  getProjects,
  deleteProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.use(verifyJWT);

// create project
router.post("/:teamId", createProject);

// get projects of a team
router.get("/:teamId", getProjects);

// delete project
router.delete("/:projectId", deleteProject);

export default router;