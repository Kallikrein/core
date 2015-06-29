/**
 * hasToken
 *
 * @module      :: Policy
 * @description :: TODO: You might write a short summary of how this policy works and what it represents here.
 * @help        :: http://sailsjs.org/#!/documentation/concepts/Policies
 */
module.exports = function(req, res, next) {

  // TODO
  console.log(req.headers);
  if (req.headers['x-token'] !== "login() is not implemented yet!")
  	return res.forbidden('invalid token');

  return next();

};
