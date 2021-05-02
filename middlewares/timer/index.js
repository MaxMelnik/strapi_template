module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        const start = Date.now();

        await next();

        const delta = Math.ceil(Date.now() - start);

        console.log(delta, 'ms');
        ctx.set('X-Response-Time', delta + 'ms');
      });
    },
  };
};
