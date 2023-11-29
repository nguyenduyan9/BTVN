import { client } from "../../config/client";

export default function getTasks(apiKey) {
  return async (dispatch) => {
    const { data } = await client.get(`/tasks`, null, apiKey);
    console.log(data);
    if (data.code === 200) {
      const tasksItem = data.data.tasks.map(({ _id, column, content }) => {
        return { _id, column, content };
      });
      dispatch({ type: "tasks/push", payload: tasksItem });
      dispatch({ type: "list/getList", payload: data.data });
      dispatch({
        type: "api/getEmail",
        payload: data.data.apiKey,
      });
    }
  };
}

export const postTasks = () => {
  return async (dispatch) => {
    const { data } = await client.post("/tasks", (body = {}), (api = null));
  };
};
