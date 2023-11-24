const { handle } = require("./requestHandler");
const { route } = require("./router");
const { start } = require("./server");

const conn = require("./database/connect/mariadb");
// 통로를 진짜 연결하게됨
conn.connect();

start(handle, route);
