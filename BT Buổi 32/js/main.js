F8.component("counter-component", {
  data: () => {
    return {
      count: 0,
      title: "Couter-App",
    };
  },

  temolate: `
  <h1>{{ title }}</h1>
  <h2>Đã đếm</h2>`,
});
