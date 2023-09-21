import figlet from "figlet";
// console.log("Hello via Bun!");
// console.log(`Bun port from process.env = ${process.env.BUN_PORT}`);
// console.log(`Bun port from Bun.env = ${Bun.env.BUN_PORT}`);

const server = Bun.serve({
  port: Bun.env.BUN_PORT,
  fetch() {
    const body = figlet.textSync("Bun!");
    // return new Response("Bun!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

