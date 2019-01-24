module.exports = async (req,res,proceed) => {
  console.log(req.headers);
  if(!req.headers.authorization) return res.badRequest('No Access Token');
  let partials = req.headers.authorization.split(' ');
  let scheme = partials[0];
  proceed();
};
