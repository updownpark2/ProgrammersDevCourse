function route(res, pathname, handle) {
  handle[pathname](res);
}
exports.route = route;
