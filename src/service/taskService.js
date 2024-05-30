import api from "../configs/Axios";
import { API_CONSTANTS } from "../constants/Index";

export const getAllTasks = async () => {
  try {
    const response = await api.get(API_CONSTANTS.GET_ALL_TASKS);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks", error);
    return [];
  }
};

export const getTaskById = async (id) => {
  try {
    const response = await api.get(`${API_CONSTANTS.GET_TASK_BY_ID}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching task by id", error);
    return {};
  }
};

export const createTask = async (task) => {
  try {
    const response = await api.post(API_CONSTANTS.CREATE_TASK, task);
    return response.data;
  } catch (error) {
    console.error("Error creating task", error);
    return {};
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await api.put(`${API_CONSTANTS.UPDATE_TASK}${id}`, task);
    return response.data;
  } catch (error) {
    console.error("Error updating task", error);
    return {};
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`${API_CONSTANTS.DELETE_TASK}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task", error);
    return {};
  }
};
