export const client = {
  send: async function (url, methor = "GET", body = null) {
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
};
