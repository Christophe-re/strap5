module.exports = {
  getContentTypes: async (ctx, next) => {
    try {
      const data = await strapi
        .service("api::get-content-types.get-content-types")
        .getContentTypes();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Get types controller error", { moreDetails: err });
    }
  },
};
