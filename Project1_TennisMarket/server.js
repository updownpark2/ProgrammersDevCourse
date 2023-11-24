let http = require("http");

let url = require("url");

function start(handle, route) {
  function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname;

    if (pathname === "/favicon.ico") {
      // favicon.ico 요청에 대한 응답 처리
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      res.end();
      return;
    }

    route(res, pathname, handle);

    // route로 보내주자 바로 그 응답을
  }

  http.createServer(onRequest).listen(7080);
}
exports.start = start;
