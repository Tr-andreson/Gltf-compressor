import myReactSinglePageApp from "./index.html";

const server = Bun.serve({
  routes: {
    "/": myReactSinglePageApp,


    "/api/*": Response.json({ message: "Not found" }, { status: 404 }),
  },

});

console.log(`Server running at ${server.url}`);


