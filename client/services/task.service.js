import axios from "@/lib/axios";

export const getTasks = (projectId) =>
  axios.get(`/tasks/${projectId}`);

export const createTask = (projectId, data) =>
  axios.post(`/tasks/${projectId}`, data);

export const updateTaskStatus = (taskId, status) =>
  axios.patch(`/tasks/${taskId}/status`, { status });
