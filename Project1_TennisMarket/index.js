const { handle } = require("./requestHandler");
const { route } = require("./router");
const { start } = require("./server");

start(handle, route);
