
/*
import Hapi from "@hapi/hapi";

const init = async () => {
  const server = Hapi.server({
    port: 1000,
    host: "localhost",
    routes: {
      files: {
        relativeTo: __dirname,
      },
    },
  });

  await server.register(require("@hapi/inert"));

  server.route({
    path: "/",
    method: "GET",
    handler: {
      directory: {
        path: "page",
      },
    },
  });

  server.route({
    path: "/welcome",
    method: "GET",
    handler() {
      return {
        code: 200,
        success: true,
        data: {
          msg: "welcome",
        },
      };
    },
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};
init();

/////
*/
