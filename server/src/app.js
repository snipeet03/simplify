import express from "express";
import errorHandler from "./utils/error.middleware.js";
import teamRoutes from "./routes/team.routes.js";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";
const app = express();


// Middleware
app.use(express.json());
app.use("/api/teams", teamRoutes);  
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

export default app;
