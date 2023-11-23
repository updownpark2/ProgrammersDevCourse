// router가 경로를 알려주면 route로 전달받은 뒤

// 여기서 이제 요청을 처리함
function main() {
  console.log("main입니다.");
}
function login() {
  console.log("login입니다.");
}
function icon() {
  console.log("이거왜뜨냐");
}

let handle = {}; //key-value 쌍으로 이루어진 객체
handle["/"] = main;
handle["/login"] = login;
handle["/favicon.ico"] = icon;

exports.handle = handle;
