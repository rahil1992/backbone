module.exports= {
  friendlyName: "Sign In",
  description: 'this module will be used to authenticate user using username and password',
  inputs: {
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      responseType: 'ok'
    },
    fails: {
      responseType: 'fail'
    },
    error: {
      responseType: 'error'
    }
  },
  fn: async (inputs,exits) => {
    User.findOne({username: inputs.username})
      .decrypt()
      .then(async response=>{
        if(!response) return exits.fails("User Not Exist");
        if(response.password !== inputs.password) return exits.fails("Invalid Password");
        delete response.password;
        response.token ='Bearer '+ await sails.helpers.signToken({id: response.id});
        return exits.success(response)
      })
  }
};
