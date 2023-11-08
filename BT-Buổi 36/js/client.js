import { config } from "./config.js";
const { SERVER_API } = config;
export const client = {
  serverApi: SERVER_API,
  setUrl: function (url) {
    this.serverApi = url;
  },
  send: async function (url, methor = "GET", body = null) {
    url = `${this.serverApi}${url}`;
    const options = {
      methor,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.json();

    return { response, data };
  },

  get: function (url) {
    return this.send(url);
  },

  post: function (url) {
    return this.send(url, "POST", body);
  },
  patch: function (url) {
    return this.send(url, "PATCH", body);
  },
  put: function (url) {
    return this.send(url, "PUT", body);
  },
};
