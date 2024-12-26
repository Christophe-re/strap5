export default {
  routes: [
    {
      method: "GET",
      path: "/get-content-types",
      handler: "get-content-types.getContentTypes",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
