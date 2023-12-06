var figlet = require("figlet");
// figlet이라는 모듈을 가지고옵니다.
// require => 외부모듈을 가져올때 쓰는 함수

figlet("SSIBAL", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
