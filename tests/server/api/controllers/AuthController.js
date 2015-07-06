/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `AuthController.login()`
   */
  login: function (req, res) {
    return res.json({
      token: 'simplequote'
    });
  },


  /**
   * `AuthController.signup()`
   */
  signup: function (req, res) {
    return res.json({
      todo: 'signup() is not implemented yet!'
    });
  },


  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  }
};

