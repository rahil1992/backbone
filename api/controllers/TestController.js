module.exports = {
  test1:async (req,res) => {
    var x = await sails.helpers.signToken({hell:"Yeah"});
    res.ok(x)
  },
  test2:async (req,res) => {
    var x = await sails.helpers.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsIjoiWWVhaCIsImlhdCI6MTU0ODIyMDc0OCwiZXhwIjoxNTQ4MjI0MzQ4fQ.1gbuJEND6bfoPlcZUuQef3DyPUA4h6pZtteNVD9Uf0w');
    res.ok(x)
  }
};
