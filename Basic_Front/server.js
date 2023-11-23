let http = require(`http`);
// require=> node.js가 가지고 있는 module
// http를 가지고 놀 수 있게 nodejs가 만들어 놓은 module

let url = require("url");
// url이라는 모듈 => url 정보를 받아올 수 있는 모듈

function start(route, handle) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url, true).pathname;
    // parse는 문자열을 catch
    route(pathname, handle);

    //응답, 요청을 각각 알아서 node.js가 넣어준다
    response.writeHead(200, { "Content-Type": "text/html" });
    // Head를 적겠다. 200 , 내가 너에게 줄 resonse의 타입은 html이다.
    response.write(`Hello Node.js`);
    // Body를 적겠다. 그 안에 들어갈 데이터는 Hello Node.js
    response.end();
    // 이제 담을거 끝났어
  }
  // onRequest => client한테 요청이오면~~

  http.createServer(onRequest).listen(8888);
  // port는 주파수라고 생각하면 된다.
  //서버가 만들어진것
  //http 를 통해 서버를 먼들었고. onRequest로 서버가 일을 해줄거고.클라이언트는 8888로 접속해야해
}
exports.start = start;
// 바깥에서 start를 사용할 수 있게 할게요 start를 담을게요
