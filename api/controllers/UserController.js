/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async (req,res)=>{
    var users = await User.find();
    res.ok(users)
  },
  list1: (req,res) => {
    User.find()
      .then(user=>{
        res.ok("Done");
      }).catch(error=>{
        return res.ok(error)
    })
  }
};

