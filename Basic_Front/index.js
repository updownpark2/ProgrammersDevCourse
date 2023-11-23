const { route } = require("./router");
let server = require("./server");
let requestHandler = require("./requestHandler");
// server.js가 모듈이라생각을해

server.start(route, requestHandler.handle);
//이렇게 했을 때만 서버가 실행되면 좋겠다.
