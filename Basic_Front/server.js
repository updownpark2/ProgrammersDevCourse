let http = require(`http`);
// require=> node.js가 가지고 있는 module
// http를 가지고 놀 수 있게 nodejs가 만들어 놓은 module

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`Hello Node.js`);
  response.end();
}

http.createServer(onRequest).listen(8888);
// port는 주파수라고 생각하면 된다.
//서버가 만들어진것
