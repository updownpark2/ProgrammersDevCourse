const express = require("express");
const app = express();

// GET + "/"

app.get("/test", function (req, res) {
  res.send("TEST SUCCESS");
});
// API: GET + "http://localhost:1234/test"
// "TEST SUCCESS"

app.get("/test/1", function (req, res) {
  res.send("ONE");
});

app.get("/hello", function (req, res) {
  res.send({
    say: "안녕하세요",
  });
});
app.get("/bye", function (req, res) {
  res.send("BYE");
});
app.get("/nicetomeetyou", function (req, res) {
  res.send("NICE TO MEET YOU");
});

app.get("/product/1", function (req, res) {
  res.send("Node.js를 배워보자 (책)");
  res.send("12000원 (가격)");
  res.send("교보문고 (출판사)");
});

app.get("/product/2", function (req, res) {
  res.send();
});

app.listen(1234);
// 근데 만약 이걸 맨 위에 둔다면 될까??

// 프레임워크이기 때문에 사용방법을 그대로 따라야한다.

/*
let http = require(`http`);

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Hello Node.js");
  response.end();
}
http.createServer(onRequest).listen(3000);
*/
// 모듈 중 내장모듈은 있다.
// http는 내장모듈

// 근데 요즘은 http 내장 모듈말고
// express.js 외장모듈 (라이브러리를 선호함)
