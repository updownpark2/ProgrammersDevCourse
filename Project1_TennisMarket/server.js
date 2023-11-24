let http = require("http");
let url = require("url");
function start(handle, route) {
  function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname;

    route(pathname, handle, res);

    // route로 보내주자 바로 그 응답을
  }

  http.createServer(onRequest).listen(7080);
}
exports.start = start;
