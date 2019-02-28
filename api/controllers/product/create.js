module.exports= {
  friendlyName: "Create New product",
  description: 'Create New product',
  inputs: {
    name: {
      type:'string',
      required: true
    },
    price: {
      type: 'number'
    },
    category: {
      type: 'string'
    },
    description: {
      type: 'string'
    },

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
    Product.create(inputs).fetch().then(product=>{
      return exits.success(product)
    }).catch(error=>{
      return exits.fails(error.message, error)
    })
  }

};
