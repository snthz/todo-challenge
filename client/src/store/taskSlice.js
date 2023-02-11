import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";

const apiUrl = "http://localhost:3000/api/task";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    isLoading: false,
    isFailed: false,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setTasksIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTasksIsFailed: (state, action) => {
      state.isFailed = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const { setTasks, setTasksIsFailed, setTasksIsLoading } =
  taskSlice.actions;

export const getApiTasks = (token) => async (dispatch) => {
  try {
    dispatch(setTasksIsLoading(true));
    const { data } = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setTasksIsLoading(false));
    dispatch(setTasks(data));
  } catch (error) {
    dispatch(setTasksIsFailed(true));
  }
};

export const postApiTask =
  ({ content }) =>
  async (dispatch) => {
    try {
      dispatch(setTasksIsLoading(true));
      await axios.post(apiUrl, { content });
      dispatch(setTasksIsLoading(false));
      dispatch(getApiTasks());
    } catch (error) {
      dispatch(setTasksIsFailed(true));
    }
  };

export const deleteApiTask = (id) => async (dispatch) => {
  try {
    dispatch(setTasksIsLoading(true));
    await axios.delete(`${apiUrl}/delete/${id}`);
    dispatch(setTasksIsLoading(false));
    dispatch(getApiTasks());
  } catch (error) {
    dispatch(setTasksIsFailed(true));
  }
};

export const deleteApiTasks =
  ({ selectedTask }) =>
  async (dispatch) => {
    try {
      dispatch(setTasksIsLoading(true));
      await axios.delete(apiUrl + "/delete", {
        data: {
          tasksId: selectedTask,
        },
      });
      dispatch(setTasksIsLoading(false));
      dispatch(getApiTasks());
    } catch (error) {
      dispatch(setTasksIsFailed(true));
    }
  };
export const deleteAllTasks = () => async (dispatch) => {
  try {
    dispatch(setTasksIsLoading(true));
    await axios.delete(apiUrl);
    dispatch(setTasksIsLoading(false));
    dispatch(getApiTasks());
  } catch (error) {
    dispatch(setTasksIsFailed(true));
  }
};
