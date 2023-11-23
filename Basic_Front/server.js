let http = require(`http`);
// require=> node.js가 가지고 있는 module
// http를 가지고 놀 수 있게 nodejs가 만들어 놓은 module

let url = require("url");
// url이라는 모듈 => url 정보를 받아올 수 있는 모듈

function start(route, handle) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;

    // parse는 문자열을 catch
    if (pathname === "/favicon.ico") {
      // favicon.ico 요청에 대한 응답 처리
      response.writeHead(200, { "Content-Type": "image/x-icon" });
      response.end();
      return;
    }
    route(pathname, handle, response);
  }
  // onRequest => client한테 요청이오면~~

  http.createServer(onRequest).listen(8888);
  // port는 주파수라고 생각하면 된다.
  //서버가 만들어진것
  //http 를 통해 서버를 먼들었고. onRequest로 서버가 일을 해줄거고.클라이언트는 8888로 접속해야해
}
exports.start = start;
// 바깥에서 start를 사용할 수 있게 할게요 start를 담을게요
