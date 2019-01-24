module.exports = {
  friendlyName: 'Sign Up',
  description: 'Logic to register new user in the system',
  inputs: {
    username: {
      description: 'this field will be used to login in the system and should be unique and required',
      type: 'string',
      required: true,
      regex: /^[a-z][a-z0-9]{5,15}$/
    },
    password: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      responseType: 'ok'
    },
    fail: {
      responseType: 'fail'
    },
    error: {
      responseType: 'error'
    }
  },
  fn: async (inputs,exits) => {
    let {username} = inputs;
    let criteria = {username: username.toLowerCase()};
    let existingUser = await User.findOne(criteria);
    if(existingUser) return exits.fail("username already exist");
    User.create(inputs)
      .fetch()
      .then(async response=>{
        delete response.password;
        response.token ='Bearer '+ await sails.helpers.signToken({id:response.id});
        return exits.success(response, 'User Registered');
      }).catch(error=>{
        sails.log.error(error);
        return exits.error("Unable to register user");
    })
  }
};
