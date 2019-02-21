module.exports = function ok(data) {
  var req = this.req;
  var res = this.res;
  return data.pipe(res);
};
