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
    Cart.destroy({product: inputs.product, user: inputs.payload.id})
      .then(response => {
        return exits.success({});
      }).catch(error=>{
      return exits.success(error.message)
    })
  }

};
