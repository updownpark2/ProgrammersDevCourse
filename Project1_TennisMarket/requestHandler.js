const mariadb = require("./database/connect/mariadb");
const fs = require(`fs`);
// 위 모듈은 화면을 바꾸고싶을때 사용되는 모듈
// Node.js가 제공하는 모듈
const main_view = fs.readFileSync("./main.html", "utf-8");
// fs야 나 이파일 읽어줘

function main(res) {
  mariadb.query("SELECT * FROM Product", function (err, rows) {});
  //query를 날릴 수 있는 기능도있다.
  res.writeHead(200, { "Contents-Type": "text/html" });
  res.write(main_view);
  res.end();
}
function redRacket(res) {
  fs.readFile("./img/redRacket.png", function (err, data) {
    res.writeHead(200, { "Contents-Type": "text/html" });
    res.write(data);
    res.end();
  });
}
function blueRacket(res) {
  fs.readFile("./img/blueRacket.png", function (err, data) {
    res.writeHead(200, { "Contents-Type": "text/html" });
    res.write(data);
    res.end();
  });
}
function blackRacket(res) {
  fs.readFile("./img/blackRacket.png", function (err, data) {
    res.writeHead(200, { "Contents-Type": "text/html" });
    res.write(data);
    res.end();
  });
}

let handle = {};

handle["/"] = main;

/*img directory */
handle["/img/redRacket.png"] = redRacket;
handle["/img/blueRacket.png"] = blueRacket;
handle["/img/blackRacket.png"] = blackRacket;
exports.handle = handle;
