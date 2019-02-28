module.exports= {
  friendlyName: "Create New product",
  description: 'Create New product',
  inputs: {
    product: {
      type:'string',
      required: true
    },
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
  fn: async (inputs,exits) => {
    Cart.create({product: inputs.product, user: inputs.payload.id}).fetch()
      .then(cart =>{
        return exits.success(cart);
      }).catch(error=>{
      return exits.success(error.message)
    })
  }

};
