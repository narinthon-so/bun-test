console.log("Hello via Bun!");
console.log(`Bun port from process.env = ${process.env.BUN_PORT}`);
console.log(`Bun port from Bun.env = ${Bun.env.BUN_PORT}`);

const server = Bun.serve({
  port: Bun.env.BUN_PORT,
  // port: 4000,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

