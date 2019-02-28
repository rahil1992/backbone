module.exports = {
  friendlyName: "Create New product",
  description: 'Create New product',
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
    },
    stream: {
      responseType: 'stream'
    }
  },
  fn: async (inputs, exits) => {
    Cart.find({user: inputs.payload.id})
      .then(cart=>{
        return exits.success(cart)
      }).catch(error=>{
        return exits.fails(error.message);
    })
  }
};
