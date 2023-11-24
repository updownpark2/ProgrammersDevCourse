function route(pathname, handle, res) {
  handle[pathname](res);
}
exports.route = route;
