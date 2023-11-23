let http = require(`http`);
// require=> node.js가 가지고 있는 module
// http를 가지고 놀 수 있게 nodejs가 만들어 놓은 module

function onRequest(request, response) {
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
