import myReactSinglePageApp from "./index.html";

const server = Bun.serve({
  routes: {
    "/": myReactSinglePageApp,

    "/api/file": {
      GET: () => new Response("List posts"),
    },


    "/api/*": Response.json({ message: "Not found" }, { status: 404 }),
  },

});

console.log(`Server running at ${server.url}`);


