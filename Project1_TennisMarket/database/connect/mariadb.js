const mariadb = require("mysql");

const conn = mariadb.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  // 여기까지하면 db접속끝

  database: "Tennis",
});
//mysql모듈이 가지고있는 함수일뿐
module.exports = conn;
