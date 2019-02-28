module.exports = {
  friendlyName: "Create New product",
  description: 'Create New product',
  inputs: {
    id: {
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
    },
    stream: {
      responseType: 'stream'
    }
  },
  fn: async (inputs, exits) => {
    inputs.category ? criteria.category = inputs.category:false;
    Product.update({id: inputs.id},{isDeleted: true}).fetch().then(product => {
      return exits.success(product)
    }).catch(error => {
      return exits.fails(error.message, error)
    })
  }
};
