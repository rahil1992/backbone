module.exports = {
  friendlyName: "To Empty cart",
  description: 'To Empty cart',
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
    Cart.destroy({user: inputs.payload.id})
      .then(cart=>{
        return exits.success({})
      }).catch(error=>{
        return exits.fails(error.message);
    });
  }
};
