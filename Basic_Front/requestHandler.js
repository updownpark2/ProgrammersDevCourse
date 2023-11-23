// router가 경로를 알려주면 route로 전달받은 뒤

// 여기서 이제 요청을 처리함
function main(response) {
  //응답, 요청을 각각 알아서 node.js가 넣어준다
  response.writeHead(200, { "Content-Type": "text/html" });
  // Head를 적겠다. 200 , 내가 너에게 줄 resonse의 타입은 html이다.
  response.write(`Main page`);
  // Body를 적겠다. 그 안에 들어갈 데이터는 Hello Node.js
  response.end();
}
function login(response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`Login page`);
  response.end();
}

let handle = {}; //key-value 쌍으로 이루어진 객체
handle["/"] = main;
handle["/login"] = login;

exports.handle = handle;
