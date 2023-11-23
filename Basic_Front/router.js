function route(pathname, handle, response) {
  if (typeof handle[pathname] === `function`) {
    handle[pathname](response);
  } else if (typeof handle[pathname] !== `function`) {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("Not Found");
    response.end();
  }

  // 아하 pathname => 포트번호 뒤에 오는아이구나
}

exports.route = route;
// router => 여기로가! 저기로가! 어디로갈지를정해주는녀석
