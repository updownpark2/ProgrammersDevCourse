function main(res) {
  res.writeHead(200, { "Contents-Type": "text/html" });
  res.write("Main Page");
  res.end();
}
function login(res) {
  res.writeHead(200, { "Contents-Type": "text/html" });
  res.write("Login");
  res.end();
}

let handle = {};

handle["/"] = main;
handle["/login"] = login;

exports.handle = handle;
