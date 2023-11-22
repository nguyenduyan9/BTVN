import { client } from "../../config/client";
export default function fetchApi(value) {
  console.log(value);
  return async (dispatch) => {
    const queryString = new URLSearchParams({ email: value });
    const { data } = await client.get(`/api-key?${queryString}`);
    console.log(data);
    if (data.code === 200) {
      localStorage.setItem("apiKey", data.data.apiKey);

      dispatch({ type: "api/getEmail", payload: data.data.apiKey });
    }
  };
}
// }
