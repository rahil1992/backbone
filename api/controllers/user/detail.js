module.exports = {
  friendlyName: "Get Department List",
  description: 'this module will be used to authenticate user using username and password',
  inputs: {
    payload: {
      type: 'ref'
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
    console.log(inputs);
    let user = await User.findOne({id: inputs.payload.id}).populateAll();
    delete user.password;
    return exits.success(user)
  }
};
